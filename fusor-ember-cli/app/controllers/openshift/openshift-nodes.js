import Ember from 'ember';
import NeedsDeploymentMixin from "../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  openshiftController: Ember.inject.controller('openshift'),

  openshiftInstallLoc: Ember.computed.alias("model.openshift_install_loc"),
  numNodes: Ember.computed.alias("model.openshift_number_nodes"),
  numMasterNodes: Ember.computed.alias("model.openshift_number_master_nodes"),
  numWorkerNodes: Ember.computed.alias("model.openshift_number_worker_nodes"),

  storageSize: Ember.computed.alias("model.openshift_storage_size"),

  // similar code to CFME where-install.js. Possible to DRY into mixin
  isRhev: Ember.computed.alias("deploymentController.isRhev"),
  isNotRhev: Ember.computed.not("isRhev"),
  isOpenStack: Ember.computed.alias("deploymentController.isOpenStack"),
  isNotOpenStack: Ember.computed.not("isOpenStack"),

  isInvalidOpenshiftNodes: Ember.computed.alias("openshiftController.isInvalidOpenshiftNodes"),

  disableRHEV: Ember.computed('isStarted', 'isNotRhev', function() {
    return (this.get('isStarted') || this.get('isNotRhev'));
  }),

  disableOpenStack: Ember.computed('isStarted', 'isNotOpenStack', function() {
    return (this.get('isStarted') || this.get('isNotOpenStack'));
  }),

  disableRHEVradio: Ember.computed('disableRHEV', 'isStarted', function () {
    return (this.get('disableRHEV') || this.get('isStarted'));
  }),

  disableOpenstackradio: Ember.computed('disableOpenStack', 'isStarted', function () {
    return (this.get('disableOpenStack') || this.get('isStarted'));
  }),

  backRouteName: Ember.computed('isOpenStack', 'isRhev', function() {
    if (this.get('isOpenStack')) {
      return 'openstack.overcloud';
    } else if (this.get('isRhev')) {
      return 'storage';
    } else {
      return 'satellite.access-insights';
    }
  }),

  showEnvironmentSummary: Ember.computed('numNodes', 'storageSize', function() {
    return (Ember.isPresent(this.get('numNodes')) && Ember.isPresent(this.get('storageSize')));
  }),

  actions: {
    openshiftLocationChanged() {},

    numNodesChanged(numNodes) {
      var numMasterNodes = 1;
      this.set('numMasterNodes', numMasterNodes);
      return this.set('numWorkerNodes', numNodes - numMasterNodes);
    },

    storageSizeChanged(storageSize) {
      return this.set('model.openshift_storage_size', storageSize);
    }
  }

});
