import Ember from 'ember';

export default Ember.Mixin.create({

  openshiftInstallLoc: Ember.computed.alias("model.openshift_install_loc"),

  numNodes: Ember.computed.alias("model.numNodes"),
  numMasterNodes: Ember.computed.alias("model.openshift_number_master_nodes"),
  numWorkerNodes: Ember.computed.alias("model.openshift_number_worker_nodes"),

  storageSize: Ember.computed.alias("model.openshift_storage_size"),

  masterVcpu: Ember.computed.alias("model.openshift_master_vcpu"),
  nodeVcpu: Ember.computed.alias("model.openshift_node_vcpu"),
  vcpuAvailable: Ember.computed.alias("model.openshift_available_vcpu"),

  masterRam: Ember.computed.alias("model.openshift_master_ram"),
  nodeRam: Ember.computed.alias("model.openshift_node_ram"),
  ramAvailable: Ember.computed.alias("model.openshift_available_ram"),

  masterDisk: Ember.computed.alias("model.openshift_master_disk"),
  nodeDisk: Ember.computed.alias("model.openshift_node_disk"),
  diskAvailable: Ember.computed.alias("model.openshift_available_disk"),

  vcpuNeeded: Ember.computed('numMasterNodes', 'numWorkerNodes', 'masterVcpu', 'nodeVcpu', function() {
    if ((this.get('numMasterNodes') > 0) && (this.get('masterVcpu') > 0) &&
        (this.get('numWorkerNodes') >= 0) && (this.get('nodeVcpu') > 0) ) {
      return ((this.get('numMasterNodes') * this.get('masterVcpu')) +
              (this.get('numWorkerNodes') * this.get('nodeVcpu')));
    } else {
      return 0;
    }
  }),

  ramNeeded: Ember.computed('numMasterNodes', 'numWorkerNodes', 'masterRam', 'nodeRam', function() {
    if ((this.get('numMasterNodes') > 0) && (this.get('masterRam') > 0) &&
        (this.get('numWorkerNodes') >= 0) && (this.get('nodeRam') > 0) ) {
      return ((this.get('numMasterNodes') * this.get('masterRam')) +
               (this.get('numWorkerNodes') * this.get('nodeRam')));
    } else {
      return 0;
    }
  }),

  diskNeeded: Ember.computed('numMasterNodes', 'numWorkerNodes', 'masterDisk', 'nodeDisk', 'storageSize', function() {
    if ((this.get('numMasterNodes') > 0) && (this.get('masterDisk') > 0) &&
        (this.get('numWorkerNodes') >= 0) && (this.get('nodeDisk') > 0) && (this.get('storageSize') > 0)) {
      return ((this.get('numMasterNodes') * this.get('masterDisk')) +
              (this.get('numWorkerNodes') * this.get('nodeDisk')) +
              (this.get('numWorkerNodes') * this.get('storageSize')));
    } else {
      return 0;
    }
  })

});
