require 'fog'

module Utils
  module Fusor
    # rubocop:disable ClassLength
    class VMLauncher
      def initialize(params)
        @deployment      = params[:deployment]
        @application     = params[:application]
        @provider        = params[:provider]
        @hostgroup       = params[:hostgroup]
        @operatingsystem = params[:os] ||= 'RedHat 7.2'
        @architecture    = params[:arch] ||= 'x86_64'
        @ptable_name     = params[:ptable_name] ||= 'Kickstart default'
        @profile_name = "#{@deployment.label}-#{@application}"
        @host_name = "changeme" # FQDN
        @vol_attr_id = 0
        @storage_id = 0
        @cp = create_compute_profile(@profile_name)
        @cr = get_compute_resource("#{@deployment.label}-#{@provider}")
      end

      def set_hostname(hname)
        @host_name = hname
      end

      def launch_rhev_vm(params)
        cpu = params[:cpu] ||= 4
        ram = params[:ram] ||= 6
        disk_size_gb = params[:disk_size_gb] ||= 40

        set_rhev_attrs(cpu, ram, disk_size_gb)

        compute_attrs = create_compute_attribute(@rhev_attrs)
        set_rhev_host_attrs(compute_attrs.vm_attrs)
        launch_vm
      end

      def launch_openshift_vm(params)
        cpu = params[:cpu] ||= 2
        ram = params[:ram] ||= 2
        disk_size_gb = params[:vda_size] ||= 10
        disks = params[:other_disks] ||= nil

        set_openshift_attrs(cpu, ram, disk_size_gb)

        if !disks.nil?
          disks.each { |size| add_vm_disk(size) }
        end

        compute_attrs = create_compute_attribute(@rhev_attrs)
        set_rhev_host_attrs(compute_attrs.vm_attrs)

        # update host attributes
        @host_attrs["build"] = "1"

        launch_vm
      end

      def launch_osp_vm
        set_osp_attrs
        create_compute_attribute(@osp_attrs)
        set_osp_host_attrs
        launch_vm
      end

      private

      def create_compute_profile(pname)
        return ComputeProfile.create("name" => pname)
      end

      def get_compute_resource(rname)
        return ComputeResource.find_by_name(rname)
      end

      def set_rhev_attrs(cpu, ram, disk_size_gb)
        cl_id  = @cr.clusters.find { |c| c.name == @deployment.rhev_cluster_name }.id
        net_id = @cr.available_networks(cl_id).first.id
        @storage_id = @cr.available_storage_domains(cl_id).first.id
        template_id = @cr.templates.find { |t| t.name == "#{@profile_name}-template" }.id

        mem_size = ram * (1024**3) # convert to gigabytes

        @rhev_attrs = {"compute_profile_id" => @cp.id,
                       "compute_resource_id" => @cr.id,
                       "vm_attrs" => {
                         "cluster" => cl_id,
                         "template" => template_id,
                         "cores" => cpu,
                         "memory" => mem_size,
                         "interfaces_attributes" => {
                           "new_interfaces" => {
                             "name" => "",
                             "network" => net_id,
                             "delete" => ""
                           }.with_indifferent_access,
                           "0" => {
                             "name" => "eth0",
                             "network" => net_id,
                             "delete" => ""
                           }.with_indifferent_access
                         }.with_indifferent_access,
                         "volumes_attributes" => {
                           "new_volumes" => {
                             "size_gb" => "",
                             "storage_domain" => @storage_id,
                             "_delete" => "",
                             "id" => "",
                             "preallocate" => "0"
                           }.with_indifferent_access,
                           @vol_attr_id.to_s => {
                             "size_gb" => disk_size_gb,
                             "storage_domain" => @storage_id,
                             "_delete" => "",
                             "id" => "",
                             "preallocate" => "0"
                           }.with_indifferent_access
                         }.with_indifferent_access
                       }.with_indifferent_access
                     }.with_indifferent_access
      end

      def set_openshift_attrs(cpu, ram, disk_size_gb)
        cl_id  = @cr.clusters.find { |c| c.name == @deployment.rhev_cluster_name }.id
        net_id = @cr.available_networks(cl_id).first.id
        @storage_id = @cr.available_storage_domains(cl_id).first.id

        mem_size = ram * (1024**3) # convert to gigabytes

        @rhev_attrs = {"compute_profile_id" => @cp.id,
                       "compute_resource_id" => @cr.id,
                       "vm_attrs" => {
                         "cluster" => cl_id,
                         "cores" => cpu,
                         "memory" => mem_size,
                         "interfaces_attributes" => {
                           "new_interfaces" => {
                             "name" => "",
                             "network" => net_id,
                             "delete" => ""
                           }.with_indifferent_access,
                           "0" => {
                             "name" => "eth0",
                             "network" => net_id,
                             "delete" => ""
                           }.with_indifferent_access
                         }.with_indifferent_access,
                         "volumes_attributes" => {
                           "new_volumes" => {
                             "size_gb" => "",
                             "storage_domain" => @storage_id,
                             "_delete" => "",
                             "id" => "",
                             "preallocate" => "0"
                           }.with_indifferent_access,
                           @vol_attr_id.to_s => {
                             "size_gb" => disk_size_gb,
                             "storage_domain" => @storage_id,
                             "_delete" => "",
                             "id" => "",
                             "bootable" => "1",
                             "preallocate" => "0"
                           }.with_indifferent_access
                         }.with_indifferent_access
                       }.with_indifferent_access
                     }.with_indifferent_access
      end

      def set_osp_attrs
        image = Image.create("name" => @profile_name,
                             "username" => 'root',
                             "user_data" => 1,
                             "uuid" => @cr.available_images.find { |hash| @profile_name == hash.name }.id,
                             "compute_resource_id" => @cr.id,
                             "operatingsystem_id" => Operatingsystem.find_by_title(@operatingsystem)['id'],
                             "architecture_id" => Architecture.find_by_name('x86_64')['id'])
        overcloud = {:openstack_auth_url => "http://#{@deployment.openstack_deployment.overcloud_address}:5000/v2.0/tokens",
                     :openstack_username => 'admin', :openstack_tenant => 'admin',
                     :openstack_api_key  => @deployment.openstack_deployment.overcloud_password }
        keystone  = Fog::Identity::OpenStack.new(overcloud)
        tenant    = keystone.get_tenants_by_name(@deployment.label).body["tenant"]
        neutron   = Fog::Network::OpenStack.new(overcloud)
        nic       = neutron.list_networks.body["networks"].find { |hash| "#{@deployment.label}-net" == hash["name"] }['id']

        @osp_attrs = {"compute_profile_id" => @cp.id,
                      "compute_resource_id" => @cr.id,
                      "vm_attrs" => {
                        "flavor_ref" => "4",
                        "network" => "#{@deployment.label}-float-net",
                        "image_ref" => image.find_by_name(@profile_name).uuid,
                        "security_groups" => "#{@deployment.label}-sec-group",
                        "nics" => ["", nic],
                        "tenant_id" => tenant['id']
                      }.with_indifferent_access
                     }.with_indifferent_access
      end

      def set_common_host_attrs
        @host_attrs = {"name" => @host_name,
                       "location_id" => Location.find_by_name('Default Location').id,
                       "environment_id" => Environment.where(:katello_id => "Default_Organization/Library/Fusor_Puppet_Content").first.id,
                       "organization_id" => @deployment["organization_id"],
                       "compute_resource_id" => @cr.id,
                       "enabled" => "1",
                       "managed" => "1",
                       "architecture_id" => Architecture.find_by_name(@architecture)['id'],
                       "operatingsystem_id" => Operatingsystem.find_by_title(@operatingsystem)['id'],
                       "domain_id" => 1,
                       "root_pass" => @deployment.openshift_root_password,
                       "mac" => ""
                      }.with_indifferent_access
      end

      def set_rhev_host_attrs(attrs)
        set_common_host_attrs
        cl_id  = @cr.clusters.find { |c| c.name == @deployment.rhev_cluster_name }.id
        net_id = @cr.available_networks(cl_id).first.id
        @host_attrs["ptable_id"] = Ptable.find { |p| p["name"] == @ptable_name }.id
        @host_attrs["build"] = "0"
        @host_attrs["hostgroup_id"] = @hostgroup.id
        @host_attrs["compute_attributes"] = {"start" => "1"}.with_indifferent_access.merge(attrs)
        @host_attrs["interfaces_attributes"] = {"0" => {
                                                  "_destroy" => "0",
                                                  "type" => "Nic::Managed",
                                                  "mac" => "",
                                                  "identifier" => "",
                                                  "name" => "eth0",
                                                  "domain_id" => "1",
                                                  "subnet_id" => "1",
                                                  "managed" => "1",
                                                  "primary" => "1",
                                                  "provision" => "1",
                                                  "virtual" => "0",
                                                  "tag" => "",
                                                  "attached_to" => "",
                                                  "compute_attributes" => {
                                                    "name" => "eth0",
                                                    "network" => net_id
                                                  }
                                                },
                                                "new_interfaces" => {
                                                  "_destroy" => "1",
                                                  "type" => "Nic::Managed",
                                                  "mac" => "",
                                                  "identifier" => "",
                                                  "name" => "eth0",
                                                  "domain_id" => "",
                                                  "subnet_id" => "",
                                                  "ip" => "",
                                                  "managed" => "1",
                                                  "primary" => "0",
                                                  "provision" => "0",
                                                  "virtual" => "0",
                                                  "tag" => "",
                                                  "attached_to" => "",
                                                  "compute_attributes" => {
                                                    "name" => "eth0",
                                                    "network" => net_id
                                                  }
                                                }
                                              }
      end

      def set_osp_host_attrs
        set_common_host_attrs
        @host_attrs["build"] = 1
        @host_attrs["provision_method"] = "image"
        @host_attrs["is_owned_by"] = "3-Users"
        @host_attrs["compute_profile_id"] = @cp.id
      end

      def add_vm_disk(size_gb)
        @vol_attr_id += 1
        @rhev_attrs["vm_attrs"]["volumes_attributes"][@vol_attr_id.to_s] =  {
                                                         "size_gb" => size_gb,
                                                         "storage_domain" => @storage_id,
                                                         "_delete" => "",
                                                         "id" => "",
                                                         "preallocate" => "0"
                                                       }.with_indifferent_access
      end

      def create_compute_attribute(attrs)
        ComputeAttribute.create(attrs)
      end

      def launch_vm
        host = ::Host.create(@host_attrs)
        if host.errors.empty?
          ::Fusor.log.info "VMLauncher: Launch VM Completed for '#{@host_name}' "
          return host
        else
          ::Fusor.log.error "VMLauncher: Launch VM for '#{@host_name}' FAILED "
          return nil
        end
      end
    end
  end
end
