import Ember from 'ember';
import request from 'ic-ajax';

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

    // GET from API v2 settings for Foreman/Sat6
    request('api/v2/settings?search=openshift').then(function(settings) {
      var results = settings['results'];
      console.log(results);
      if (!(model.get('openshift_master_vcpu') > 0)) {
        model.set('openshift_master_vcpu', results.findBy('name', 'openshift_master_vcpu').value);
      }
      if (!(model.get('openshift_master_ram') > 0)) {
        model.set('openshift_master_ram', results.findBy('name', 'openshift_master_ram').value);
      }
      if (!(model.get('openshift_master_disk') > 0)) {
        model.set('openshift_master_disk', results.findBy('name', 'openshift_master_disk').value);
      }
      if (!(model.get('openshift_node_vcpu') > 0)) {
        model.set('openshift_node_vcpu', results.findBy('name', 'openshift_node_vcpu').value);
      }
      if (!(model.get('openshift_node_ram') > 0)) {
        model.set('openshift_node_ram', results.findBy('name', 'openshift_node_ram').value);
      }
      if (!(model.get('openshift_node_disk') > 0)) {
        model.set('openshift_node_disk', results.findBy('name', 'openshift_node_disk').value);
      }
    });

  },

  deactivate() {
    return this.send('saveDeployment', null);
  }

});


