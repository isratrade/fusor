import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    controller.set('model', model);

    var isRhev = this.controllerFor('deployment').get('isRhev');
    var isOpenStack = this.controllerFor('deployment').get('isOpenStack');
    if (isRhev && !(isOpenStack)) {
      model.set('openshift_install_loc', 'RHEV');
    } else if (!(isRhev) && isOpenStack) {
      model.set('openshift_install_loc', 'OpenStack');
    }

    // TODO pull from API resources available
    var result = { vcpuAvailabe: 8,
                   ramAvailable: 32,
                   diskAvailable: 250 };

    if (!(model.get('openshift_available_vcpu') > 0)) {
      model.set('openshift_available_vcpu', result['vcpuAvailabe']);
    }
    if (!(model.get('openshift_available_ram') > 0)) {
      model.set('openshift_available_ram', result['ramAvailable']);
    }
    if (!(model.get('openshift_available_disk') > 0)) {
      model.set('openshift_available_disk', result['diskAvailable']);
    }

    // TODO pull from SAT6 default settings
    if (!(model.get('openshift_master_vcpu') > 0)) {
      model.set('openshift_master_vcpu', 2);
    }
    if (!(model.get('openshift_master_ram') > 0)) {
      model.set('openshift_master_ram', 8);
    }
    if (!(model.get('openshift_master_disk') > 0)) {
      model.set('openshift_master_disk', 30);
    }

    if (!(model.get('openshift_node_vcpu') > 0)) {
      model.set('openshift_node_vcpu', 1);
    }
    if (!(model.get('openshift_node_ram') > 0)) {
      model.set('openshift_node_ram', 8);
    }
    if (!(model.get('openshift_node_disk') > 0)) {
      model.set('openshift_node_disk', 15);
    }
  },

  deactivate() {
    return this.send('saveDeployment', null);
  }

});
