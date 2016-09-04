/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) {
    return 'deployment_number_' + i;
  },
  organization_id: null,
  lifecycle_environment_id: null,
  is_disconnected: false,
  rhev_is_self_hosted: false,
  rhev_engine_admin_password: '12345678',
  rhev_data_center_name: 'Default',
  rhev_cluster_name: 'Default',
  rhev_storage_name: 'my_storage',
  rhev_storage_type: 'NFS',
  rhev_storage_address: '10.2.132.4',
  rhev_root_password: "12345678",
  // rhev_cpu_type: null,
  rhev_share_path: '/share/path',
  rhev_export_domain_name: 'my_export',
  rhev_export_domain_address: '10.22.17.4',
  rhev_export_domain_path: '/export/path',
  cfme_install_loc: "RHEV",
  cfme_root_password: "12345678",
  cfme_admin_password: "12345678",
  cfme_db_password: "12345678",
  host_naming_scheme: "Freeform",
  custom_preprend_name: null,
  enable_access_insights: true,
  openstack_undercloud_password: "dummy password",
  upstream_consumer_uuid: null,
  upstream_consumer_name: null,
  openshift_storage_host: "1.2.3.4",
  openshift_storage_type: "NFS",
  openshift_export_path: "/share/openshift/path",
  openshift_user_password: 'openshiftPassword',
  openshift_subdomain_name: 'app123',
  cloudforms_vcpu: 4,
  cloudforms_ram: 8,
  cloudforms_vm_disk_size: 40,
  cloudforms_db_disk_size: 40

});

  //       "cdn_url": "10.35.3.63",
  //       "manifest_file": "/usr/share/foreman/tmp/import_10c9a9f7cc20541de373.zip",
  //       "created_at": "2015-11-30T09:31:03Z",
  //       "updated_at": "2015-12-03T13:18:19Z",
  //       "organization_id": 1,
  //       "lifecycle_environment_id": null,
  //       "discovered_host_id": 2,
  //       "discovered_host_ids": [
  //           4
  //       ],
  //       "subscription_ids": [
  //           4,
  //           3
  //       ],
  //       "introspection_task_ids": []

  // rhev_root_password: DS.attr('string'),
  // cfme_root_password: DS.attr('string'),
  // cfme_admin_password: DS.attr('string'),

  // foreman_task_uuid: DS.attr('string'),
  // upstream_consumer_uuid: DS.attr('string'),
  // upstream_consumer_name: DS.attr('string'),

  // rhev_export_domain_name: DS.attr('string'),
  // rhev_export_domain_address: DS.attr('string'),
  // rhev_export_domain_path: DS.attr('string'),

  // rhev_local_storage_path: DS.attr('string'),

  // host_naming_scheme: DS.attr('string'),
  // custom_preprend_name: DS.attr('string'),
  // enable_access_insights: DS.attr('boolean'),
  // cfme_address: DS.attr('string'),

  // cdn_url: DS.attr('string'),
  // manifest_file: DS.attr('string'),

  // created_at: DS.attr('date'),
  // updated_at: DS.attr('date'),

  // // has one Engine - discovered_host is an alias for rhev_engine_host_id
  // discovered_host: DS.belongsTo('discovered-host', {async: true}),
  // rhev_engine_host_id: DS.attr('number'),

  // // has many Hypervisors
  // discovered_hosts: DS.hasMany('discovered-host', {async: true}),

  // // has many Subscriptions
  // subscriptions: DS.hasMany('subscription', {inverse: 'deployment', async: true}),
  // introspection_tasks: DS.hasMany('introspection-task', {async: true}),
