import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  organization: DS.belongsTo('organization'),
  lifecycle_environment: DS.belongsTo('lifecycle_environment'),

  deploy_rhev: DS.attr('boolean'),
  deploy_cfme: DS.attr('boolean'),
  deploy_openstack: DS.attr('boolean'),

  rhev_hypervisor_host_id: DS.attr('number'),
  rhev_engine_host_id: DS.attr('number'),
  rhev_hypervisor_hostname: DS.attr('string'),
  rhev_engine_hostname: DS.attr('string'),
  rhev_database_name: DS.attr('string'),
  rhev_cluster_name: DS.attr('string'),
  rhev_storage_name: DS.attr('string'),
  rhev_storage_type: DS.attr('string'),
  rhev_storage_address: DS.attr('string'),
  rhev_cpu_type: DS.attr('string'),
  rhev_share_path: DS.attr('string'),

  cfme_install_loc: DS.attr('string'),

  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
});
