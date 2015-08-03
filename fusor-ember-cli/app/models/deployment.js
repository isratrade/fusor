import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  organization: DS.belongsTo('organization', {async: true}),
  lifecycle_environment: DS.belongsTo('lifecycle-environment', {async: true}),

  deploy_rhev: DS.attr('boolean'),
  deploy_cfme: DS.attr('boolean'),
  deploy_openstack: DS.attr('boolean'),

  rhev_is_self_hosted: DS.attr('boolean'),

  rhev_engine_admin_password: DS.attr('string'),
  rhev_database_name: DS.attr('string'),
  rhev_cluster_name: DS.attr('string'),
  rhev_storage_name: DS.attr('string'),
  rhev_storage_type: DS.attr('string'),
  rhev_storage_address: DS.attr('string'),
  rhev_cpu_type: DS.attr('string'),
  rhev_share_path: DS.attr('string'),

  cfme_install_loc: DS.attr('string'),

  rhev_root_password: DS.attr('string'),
  cfme_root_password: DS.attr('string'),

  foreman_task_uuid: DS.attr('string'),
  upstream_consumer_uuid: DS.attr('string'),
  upstream_consumer_name: DS.attr('string'),

  rhev_export_domain_name: DS.attr('string'),
  rhev_export_domain_address: DS.attr('string'),
  rhev_export_domain_path: DS.attr('string'),

  rhev_local_storage_path: DS.attr('string'),
  rhev_gluster_node_name: DS.attr('string'),
  rhev_gluster_node_address: DS.attr('string'),
  rhev_gluster_ssh_port: DS.attr('string'),
  rhev_gluster_root_password: DS.attr('string'),

  host_naming_scheme: DS.attr('string'),
  custom_preprend_name: DS.attr('string'),
  enable_access_insights: DS.attr('boolean'),
  cfme_address: DS.attr('string'),

  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  // has one Engine - discovered_host is an alias for rhev_engine_host_id
  discovered_host: DS.belongsTo('discovered-host', {async: true}),
  rhev_engine_host_id: DS.attr('number'),

  // has many Hypervisors
  discovered_hosts: DS.hasMany('discovered-host', {async: true}),

  // has many Subscriptions
  subscriptions: DS.hasMany('subscription', {inverse: 'deployment', async: true}),

  // Ember Data doesn't have DS.attr('array') so I did this
  rhev_hypervisor_host_ids: function() {
    var discovered_hosts = this.get('discovered_hosts');
    if (Ember.isPresent(discovered_hosts)) {
      return discovered_hosts.getEach('id');
    } else {
      return [];
    }
  }.property('discovered_hosts'),

  isStarted: function() {
    return !!(this.get('foreman_task_uuid'));
  }.property('foreman_task_uuid'),

  rhevDiscoveredHypervisors: function() {
    var rhev_hypervisor_host_ids = this.get('rhev_hypervisor_host_ids');
    return this.store.find('discovered-host', {id: rhev_hypervisor_host_ids}).then(function(results) {
        alert('rhevDiscoveredHypervisors length is ' + results.get('length'));
        return results;
    });
  }.property('rhev_hypervisor_host_ids'),

  rhevManagedHypervisors: function() {
    var rhev_hypervisor_host_ids = this.get('rhev_hypervisor_host_ids');
    return this.store.find('host', {id: rhev_hypervisor_host_ids}).then(function(results) {
        alert('rhevManagedHypervisors length is ' + results.get('length'));
        return results;
    });
  }.property('rhev_hypervisor_host_ids'),

});


