import Ember from 'ember';

export default Ember.Component.extend({

  numMasterNodes: 1,

  numNodeNodes: Ember.computed('numNodes', function() {
    return this.get('numNodes') -1 ;
  }),

  vcpuNeeded: Ember.computed('numMasterNodes', 'numNodeNodes', 'masterVcpu', 'nodeVcpu', function() {
    return ( (this.get('numMasterNodes') * this.get('masterVcpu')) +
             (this.get('numNodeNodes') * this.get('nodeVcpu')) );
  }),

  ramNeeded: Ember.computed('numMasterNodes', 'numNodeNodes', 'masterRam', 'nodeRam', function() {
    return ( (this.get('numMasterNodes') * this.get('masterRam')) +
             (this.get('numNodeNodes') * this.get('nodeRam')) );
  }),

  diskNeeded: Ember.computed('numMasterNodes', 'numNodeNodes', 'masterDisk', 'nodeDisk', 'storageSize', function() {
    return ( (this.get('numMasterNodes') * this.get('masterDisk')) +
             (this.get('numNodeNodes') * this.get('nodeDisk')) +
              this.get('storageSize') );
  }),

  vcpuAvailable: 8,
  ramAvailable: 32,
  diskAvailable: 250

//     {{ose-env-summary numNodes=model.openshift_number_nodes
//                       storageSize=model.openshift_storage_size
//                       masterVcpu=2
//                       masterRam=8
//                       masterDisk=30
//                       nodeVcpu=1
//                       nodeRam=8
//                       nodeDisk=15
//                       vcpuNeeded=3
//                       ramNeeded=16
//                       diskNeeded=75
//                       vcpuAvailable=8
//                       ramAvailable=16
//                       diskAvailable=250


// vcpuAvailable
// ramNeeded
// ramAvailable
// diskNeeded
// diskAvailable

});
