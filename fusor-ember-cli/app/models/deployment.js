import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  organization: DS.belongsTo('organization', {async: true}),
  lifecycle_environment: DS.belongsTo('lifecycle-environment', {async: true}),

  deploy_rhev: DS.attr('boolean'),
  deploy_cfme: DS.attr('boolean'),
  deploy_openstack: DS.attr('boolean'),

  is_disconnected: DS.attr('boolean'),
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
  cfme_admin_password: DS.attr('string'),

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

  openstack_undercloud_password: DS.attr('string'),
  openstack_undercloud_ip_addr: DS.attr('string'),
  openstack_undercloud_user: DS.attr('string'),
  openstack_undercloud_user_password: DS.attr('string'),

  attachment: DS.attr('file'),

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

  // controller.deployment.isStarted returns false if refreshing child route,
  // so best to have it on model as well
  isStarted: function() {
    return !!(this.get('foreman_task_uuid'));
  }.property('foreman_task_uuid'),
  isNotStarted: Ember.computed.not('isStarted'),

  // also put these in model rather than controller so it is accessible
  progress: null,
  state: null,

  foremanTask: function() {
    if (this.get('isStarted')) {
        return this.store.find('foreman-task', this.get('foreman_task_uuid'));
    }
  }.property('foreman_task_uuid', 'isStarted'),

  setProgress: function() {
    if (this.get('foremanTask')) {
      this.get('foremanTask').then(function(result) {
          this.set('progress', result.get('progress'));
          this.set('state', result.get('state'));
      }.bind(this));
    }
  }.observes('foremanTask', 'foreman_task_uuid'),

  progressPercent: function() {
    if (this.get('progress')) {
        return (this.get('progress') * 100).toFixed(1) + '%';
    }
  }.property('progress')

});


