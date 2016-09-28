module Fusor
  class DeploymentSerializer < ActiveModel::Serializer

    type :deployments

    attributes :id, :name, :label, :description,
               :deploy_rhev, :deploy_cfme, :deploy_openstack, :deploy_openshift,
               :rhev_engine_admin_password,
               :rhev_data_center_name, :rhev_cluster_name, :rhev_storage_name,
               :rhev_storage_type, :rhev_storage_address, :rhev_cpu_type, :rhev_share_path,
               :rhev_export_domain_name, :rhev_export_domain_address,
               :rhev_export_domain_path, :hosted_storage_name, :hosted_storage_address,
               :hosted_storage_path, :rhev_local_storage_path,
               :rhev_is_self_hosted, :rhev_self_hosted_engine_hostname, :cfme_install_loc,
               :foreman_task_uuid, :upstream_consumer_uuid, :upstream_consumer_name,
               :rhev_root_password, :cfme_root_password, :cfme_admin_password,
               :host_naming_scheme, :custom_preprend_name, :enable_access_insights,
               :cfme_address, :cfme_db_password,
               :rhev_engine_host_id,
               :cfme_hostname,
               :is_disconnected,
               :has_content_error,
               :cdn_url, :manifest_file,
               :openstack_deployment_id,
               :openshift_install_loc,
               :openshift_storage_size,
               :openshift_username,
               :openshift_user_password,
               :openshift_root_password,
               :openshift_master_vcpu,
               :openshift_master_ram,
               :openshift_master_disk,
               :openshift_node_vcpu,
               :openshift_node_ram,
               :openshift_node_disk,
               :openshift_available_vcpu,
               :openshift_available_ram,
               :openshift_available_disk,
               :openshift_number_master_nodes,
               :openshift_number_worker_nodes,
               :openshift_storage_type,
               :openshift_storage_host,
               :openshift_export_path,
               :openshift_username,
               :openshift_subdomain_name,
               :openshift_sample_helloworld,
               :cloudforms_vcpu,
               :cloudforms_ram,
               :cloudforms_vm_disk_size,
               :cloudforms_db_disk_size,
               :created_at, :updated_at

    has_one :organization, serializer: ::OrganizationSerializer
    has_one :lifecycle_environment, serializer: LifecycleEnvironmentSerializer
    # has one engine
    has_one :discovered_host, serializer: DiscoveredHostSerializer
    # has many hypervisors
    has_many :discovered_hosts, serializer: DiscoveredHostSerializer

    has_many :openshift_hosts, serializer: HostBaseSerializer
    def openshift_hosts
      object.ose_master_hosts + object.ose_worker_hosts
    end

    has_many :subscriptions, serializer: SubscriptionSerializer
    has_many :introspection_tasks, serializer: IntrospectionTaskSerializer

    has_one :foreman_task, key: :foreman_task_uuid, serializer: ForemanTaskSerializer

    has_one :openstack_deployment, serializer: Fusor::OpenstackDeploymentSerializer
  end
end
