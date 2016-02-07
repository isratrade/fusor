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
             (this.get('numNodeNodes') * this.get('storageSize')) );
  }),

  vcpuAvailable: 8,
  ramAvailable: 32,
  diskAvailable: 250

});
