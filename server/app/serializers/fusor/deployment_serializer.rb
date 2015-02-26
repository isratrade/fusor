module Fusor
  class DeploymentSerializer < ActiveModel::Serializer

    embed :ids, include: true
    attributes :id, :name,
               :deploy_rhev, :deploy_cfme, :deploy_openstack,
               :rhev_hypervisor_host_id, :rhev_engine_host_id,
               :rhev_hypervisor_hostname, :rhev_engine_hostname,
               :rhev_database_name, :rhev_cluster_name, :rhev_storage_name,
               :rhev_storage_type, :rhev_storage_address, :rhev_cpu_type, :rhev_share_path,
               :cfme_install_loc,
               :created_at, :updated_at
    has_one :organization, serializer: ::OrganizationSerializer
    has_one :lifecycle_environment, serializer: ::LifecycleEnvironmentSerializer
  end
end
