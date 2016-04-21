#
# Copyright 2015 Red Hat, Inc.
#
# This software is licensed to you under the GNU General Public
# License as published by the Free Software Foundation; either version
# 2 of the License (GPLv2) or (at your option) any later version.
# There is NO WARRANTY for this software, express or implied,
# including the implied warranties of MERCHANTABILITY,
# NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
# have received a copy of GPLv2 along with this software; if not, see
# http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.

require "net/http"
require "sys/filesystem"
require "uri"

module Fusor
  # rubocop:disable ClassLength
  class Api::V21::DeploymentsController < Api::V2::DeploymentsController

    before_filter :find_deployment, :only => [:destroy, :show, :update,
                                              :deploy, :redeploy, :validate, :log,
                                              :sync_openstack, :openshift_disk_space]

    rescue_from Encoding::UndefinedConversionError, :with => :ignore_it

    def index
      @deployments = Deployment.search_for(params[:search], :order => params[:order]).by_id(params[:id])
      render :json => @deployments, :each_serializer => Fusor::DeploymentSerializer, :serializer => RootArraySerializer
    end

    def show
      render :json => @deployment, :serializer => Fusor::DeploymentSerializer
    end

    def create
      @deployment = Deployment.new(deployment_params)
      if @deployment.save
        render :json => @deployment, :serializer => Fusor::DeploymentSerializer
      else
        render json: {errors: @deployment.errors}, status: 422
      end
    end

    def update
      # OpenStack Undercloud attributes should only be set by the undercloud
      # controller (after it has validated them), never by directly updating
      # the deployment object.

      params[:deployment].delete :openstack_undercloud_password
      params[:deployment].delete :openstack_undercloud_ip_addr
      params[:deployment].delete :openstack_undercloud_user
      params[:deployment].delete :openstack_undercloud_user_password
      @deployment.attributes = deployment_params
      @deployment.save(:validate => false)
      render :json => @deployment, :serializer => Fusor::DeploymentSerializer
    end

    def destroy
      @deployment.destroy
      respond_for_show :resource => @deployment
    end

    def deploy
      # just inherit from V2
      begin
        super
      rescue ::ActiveRecord::RecordInvalid
        render json: {errors: @deployment.errors}, status: 422
      end
    end

    def redeploy
      begin
        if @deployment.invalid?
          raise ::ActiveRecord::RecordInvalid.new @deployment
        end
        ::Fusor.log.warn "Attempting to redeploy deployment with id [ #{@deployment.id} ]"
        new_deploy_task = async_task(::Actions::Fusor::Deploy, @deployment)
        respond_for_async :resource => new_deploy_task
      rescue ::ActiveRecord::RecordInvalid
        render json: {errors: @deployment.errors}, status: 422
      end
    end

    def validate
      @deployment.valid?
      render json: {
        :validation => {
          :deployment_id => @deployment.id,
          :errors => @deployment.errors.full_messages,
          :warnings => @deployment.warnings
        }
      }
    end

    def validate_cdn
      begin
        if params.key?('cdn_url')
          ad_hoc_req = lambda do |uri_str|
            uri = URI.parse(uri_str)
            http = Net::HTTP.new(uri.host, uri.port)
            request = Net::HTTP::Head.new(uri.request_uri)
            http.request(request)
          end

          unescaped_uri_str = URI.unescape(params[:cdn_url])
          # Best we can reasonably do here is to check to make sure we get
          # back a 200 when we hit $URL/content, since we can be reasonably
          # certain a repo needs to have the /content path
          full_uri_str = "#{unescaped_uri_str}/content"
          full_uri_str = "#{unescaped_uri_str}content" if unescaped_uri_str =~ /\/$/

          response = ad_hoc_req.call(full_uri_str)
          # Follow a 301 once in case redirect /content -> /content/
          final_code = response.code
          final_code = ad_hoc_req.call(response['location']).code if response.code == '301'

          render json: { :cdn_url_code => final_code }, status: 200
        else
          raise 'cdn_url parameter missing'
        end
      rescue => error
        message = 'Malformed request'
        message = error.message if error.respond_to?(:message)
        render json: { :error => message }, status: 400
      end
    end

    def log
      log_type_param = params[:log_type] || 'fusor_log'
      reader = create_log_reader(log_type_param)
      log_path = get_log_path(log_type_param)

      if !File.exist? log_path
        render :json => {log_type_param => nil}
      elsif params[:line_number_gt]
        render :json => {log_type_param => reader.tail_log_since(log_path, (params[:line_number_gt]).to_i)}
      else
        render :json => {log_type_param => reader.read_full_log(log_path)}
      end
    end

    def sync_openstack
      return render json: {}, status: 304 unless @deployment.deploy_openstack?

      undercloud_handle.edit_plan_parameters('overcloud', build_openstack_params)

      sync_errors = get_sync_openstack_errors
      return render json: {errors: sync_errors}, status: 500 unless sync_errors.empty?

      render json: {},  status: 204
    end

    def openshift_disk_space
      # Openshift deployments need to know how much disk space is available on the NFS storage pool
      # This method mounts the specifed NFS share and gets the available disk space
      begin
        nfs_address = @deployment.rhev_storage_address
        nfs_path = @deployment.rhev_share_path
        deployment_id = @deployment.id

        cmd = "sudo safe-mount.sh '#{deployment_id}' '#{nfs_address}' '#{nfs_path}'"
        status, _output = Utils::Fusor::CommandUtils.run_command(cmd)

        raise 'Unable to mount NFS share at specified mount point' unless status == 0

        stats = Sys::Filesystem.stat("/tmp/fusor-test-mount-#{deployment_id}")
        mb_available = stats.block_size * stats.blocks_available / 1024 / 1024

        Utils::Fusor::CommandUtils.run_command("sudo safe-umount.sh #{deployment_id}")
        render json: { :openshift_disk_space => mb_available }, status: 200
      rescue Exception => error
        message = 'Unable to retrieve Openshift disk space'
        message = error.message if error.respond_to?(:message)

        render json: { :error => message}, status: 500
      end
    end

    def resource_name
      'deployment'
    end

    private

    def deployment_params
      params.require(:deployment).permit(:name, :description, :deploy_rhev, :deploy_cfme,
                                         :deploy_openstack, :deploy_openshift, :is_disconnected, :rhev_is_self_hosted,
                                         :rhev_engine_admin_password, :rhev_data_center_name,
                                         :rhev_cluster_name, :rhev_storage_name, :rhev_storage_type,
                                         :rhev_storage_address, :rhev_cpu_type, :rhev_share_path,
                                         :cfme_install_loc, :rhev_root_password, :cfme_root_password,
                                         :cfme_admin_password, :foreman_task_uuid, :upstream_consumer_uuid,
                                         :upstream_consumer_name, :rhev_export_domain_name,
                                         :rhev_export_domain_address, :rhev_export_domain_path,
                                         :rhev_local_storage_path, :rhev_gluster_node_name,
                                         :rhev_gluster_node_address, :rhev_gluster_ssh_port,
                                         :rhev_gluster_root_password, :host_naming_scheme, :has_content_error,
                                         :custom_preprend_name, :enable_access_insights, :cfme_address,
                                         :cfme_hostname, :openstack_undercloud_password,
                                         :openstack_undercloud_ip_addr, :openstack_undercloud_user,
                                         :openstack_undercloud_user_password, :openstack_undercloud_hostname,
                                         :openstack_overcloud_hostname, :openstack_overcloud_address,
                                         :openstack_overcloud_password, :openstack_overcloud_private_net,
                                         :openstack_overcloud_float_net, :openstack_overcloud_float_gateway,
                                         :openshift_install_loc, :openshift_number_master_nodes, :openshift_number_worker_nodes,
                                         :openshift_storage_size, :openshift_username, :openshift_user_password,
                                         :openshift_root_password, :openshift_master_vcpu, :openshift_master_ram,
                                         :openshift_master_disk, :openshift_node_vcpu, :openshift_node_ram, :openshift_node_disk,
                                         :openshift_available_vcpu, :openshift_available_ram, :openshift_available_disk,
                                         :openshift_storage_type, :openshift_storage_name, :openshift_storage_host,
                                         :openshift_export_path, :openshift_subdomain_name, :cloudforms_vcpu,
                                         :cloudforms_ram, :cloudforms_vm_disk_size, :cloudforms_db_disk_size,
                                         :cdn_url, :manifest_file, :created_at, :updated_at, :rhev_engine_host_id,
                                         :organization_id, :lifecycle_environment_id, :discovered_host_id,
                                         :foreman_task_id, :openstack_overcloud_node_count,
                                         :openstack_overcloud_ceph_storage_flavor, :openstack_overcloud_ceph_storage_count,
                                         :openstack_overcloud_cinder_storage_flavor, :openstack_overcloud_cinder_storage_count,
                                         :openstack_overcloud_swift_storage_flavor, :openstack_overcloud_swift_storage_count,
                                         :openstack_overcloud_compute_flavor, :openstack_overcloud_compute_count,
                                         :openstack_overcloud_controller_flavor, :openstack_overcloud_controller_count,
                                         :openstack_overcloud_ext_net_interface, :openstack_overcloud_libvirt_type,
                                         :discovered_host_ids => [])
    end

    def find_deployment
      id = params[:deployment_id] || params[:id]
      not_found and return false if id.blank?
      @deployment = Deployment.find(id)
    end

    def ignore_it
      true
    end

    def create_log_reader(log_type_param)
      case log_type_param
        when 'fusor_log', 'foreman_log'
          Fusor::Logging::RailsLogReader.new
        when 'candlepin_log'
          Fusor::Logging::JavaLogReader.new
        when 'foreman_proxy_log'
          Fusor::Logging::ProxyLogReader.new
        else
          Fusor::Logging::LogReader.new
      end
    end

    def get_log_path(log_type_param)
      dir = ::Fusor.log_file_dir(@deployment.label, @deployment.id)
      case log_type_param
        when 'messages_log'
          File.join(dir, 'var/log/messages')
        when 'candlepin_log'
          File.join(dir, 'var/log/candlepin/candlepin.log')
        when 'foreman_log'
          File.join(dir, 'var/log/foreman/production.log')
        when 'foreman_proxy_log'
          File.join(dir, 'var/log/foreman-proxy/proxy.log')
        else
          ::Fusor.log_file_path(@deployment.label, @deployment.id)
      end
    end

    def undercloud_handle
      Overcloud::UndercloudHandle.new('admin', @deployment.openstack_undercloud_password, @deployment.openstack_undercloud_ip_addr, 5000)
    end

    def get_openstack_param_value(plan, param_name)
      param = plan.parameters.find { |p| p['name'] == param_name }
      param['value'] if param
    end

    def build_openstack_params
      {
          NeutronPublicInterface: @deployment.openstack_overcloud_ext_net_interface,
          NovaComputeLibvirtType: @deployment.openstack_overcloud_libvirt_type,
          AdminPassword: @deployment.openstack_overcloud_password,

          OvercloudComputeFlavor: @deployment.openstack_overcloud_compute_flavor,
          ComputeCount: @deployment.openstack_overcloud_compute_count,
          OvercloudControlFlavor: @deployment.openstack_overcloud_controller_flavor,
          ControllerCount: @deployment.openstack_overcloud_controller_count,
          OvercloudCephStorageFlavor: @deployment.openstack_overcloud_ceph_storage_flavor,
          CephStorageCount: @deployment.openstack_overcloud_ceph_storage_count,
          OvercloudBlockStorageFlavor: @deployment.openstack_overcloud_cinder_storage_flavor,
          BlockStorageCount: @deployment.openstack_overcloud_cinder_storage_count,
          OvercloudSwiftStorageFlavor: @deployment.openstack_overcloud_swift_storage_flavor,
          ObjectStorageCount: @deployment.openstack_overcloud_swift_storage_count,
      }
    end

    def get_sync_openstack_errors
      plan = undercloud_handle.get_plan_parameters('overcloud')
      errors = {}

      if @deployment.openstack_overcloud_ext_net_interface != plan['NeutronPublicInterface'].try(:[], 'Default')
        errors[:openstack_overcloud_ext_net_interface] = [_('Openstack NeutronPublicInterface was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_libvirt_type != plan['NovaComputeLibvirtType'].try(:[], 'Default')
        errors[:openstack_overcloud_libvirt_type] = [_('Openstack NovaComputeLibvirtType was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_password != plan['AdminPassword'].try(:[], 'Default')
        errors[:openstack_overcloud_password] = [_('Openstack AdminPassword was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_compute_flavor != plan['OvercloudComputeFlavor'].try(:[], 'Default')
        errors[:openstack_overcloud_compute_flavor] = [_('Openstack OvercloudComputeFlavor was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_compute_count != plan['ComputeCount'].try(:[], 'Default')
        errors[:openstack_overcloud_compute_count] = [_('Openstack ComputeCount was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_controller_flavor != plan['OvercloudControlFlavor'].try(:[], 'Default')
        errors[:openstack_overcloud_controller_flavor] = [_('Openstack OvercloudControlFlavor was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_controller_count != plan['ControllerCount'].try(:[], 'Default')
        errors[:openstack_overcloud_controller_count] = [_('Openstack ControllerCount was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_ceph_storage_flavor != plan['OvercloudCephStorageFlavor'].try(:[], 'Default')
        errors[:openstack_overcloud_ceph_storage_flavor] = [_('Openstack OvercloudCephStorageFlavor was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_ceph_storage_count != plan['CephStorageCount'].try(:[], 'Default')
        errors[:openstack_overcloud_ceph_storage_count] = [_('Openstack CephStorageCount was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_cinder_storage_flavor != plan['OvercloudBlockStorageFlavor'].try(:[], 'Default')
        errors[:openstack_overcloud_cinder_storage_flavor] = [_('Openstack OvercloudBlockStorageFlavor was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_cinder_storage_count != plan['BlockStorageCount'].try(:[], 'Default')
        errors[:openstack_overcloud_cinder_storage_count] = [_('Openstack BlockStorageCount was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_swift_storage_flavor != plan['OvercloudSwiftStorageFlavor'].try(:[], 'Default')
        errors[:openstack_overcloud_swift_storage_flavor] = [_('Openstack OvercloudSwiftStorageFlavor was not properly synchronized')]
      end

      if @deployment.openstack_overcloud_swift_storage_count != plan['ObjectStorageCount'].try(:[], 'Default')
        errors[:openstack_overcloud_swift_storage_count] = [_('Openstack ObjectStorageCount was not properly synchronized')]
      end

      errors
    end
  end
end
