import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['deployment', 'hypervisor/discovered-host', 'engine/discovered-host'],

  cssHostHostId: function () {
    return ('host_' + this.get('model.id'));
  }.property('model.id'),

  cssIdHostId: function () {
    return ('id_' + this.get('model.id'));
  }.property('model.id'),

  allDiscoveredHosts: Ember.computed.alias("controllers.hypervisor/discovered-host.allDiscoveredHosts"),
  // same as controllers.deployment.discovered_hosts
  selectedRhevHypervisorHosts: Ember.computed.alias("controllers.hypervisor/discovered-host.model"),
  // same as controllers.deployment.discovered_host
  selectedRhevEngineHost: Ember.computed.alias("controllers.engine/discovered-host.model"),

  isAllChecked: Ember.computed.alias("controllers.hypervisor/discovered-host.isAllChecked"),
  allChecked: Ember.computed.alias("controllers.hypervisor/discovered-host.allChecked"),

  addOrRemoveHypervisor: function(row){
    if (row.get('isSelectedAsHypervisor')) {
      this.get('controllers.hypervisor/discovered-host.model').addObject(row.get('model'));
    } else {
      this.get('controllers.hypervisor/discovered-host.model').removeObject(row.get('model'));
    }
  }.observes('isSelectedAsHypervisor'),

  isSelectedAsHypervisor: function () {
    if (this.get('selectedRhevHypervisorHosts')) {
      var selectedIds = this.get('selectedRhevHypervisorHosts').getEach("model.id");
      return selectedIds.contains(this.get('id'));
    } else {
      return false;
    }
  }.property('selectedRhevHypervisorHosts.[]'),

  isSelectedAsEngine: function () {
    return (this.get('selectedRhevEngineHost.id') === this.get('model.id'));
  }.property('selectedRhevEngineHost'),

  hostType: function() {
    if (this.get('model.is_virtual')) {
      return "Virtual";
    } else {
      return "Bare Metal";
    }
  }.property('model.is_virtual'),

  actions: {
    engineHostChanged: function(host) {
      var engine_hostname = host.get('name');
      var controller = this.get('controllers.deployment');
      return this.store.findRecord('discovered-host', host.get('id')).then(function (result) {
        return controller.set('discovered_host', result);
        //TODO save hostname on discovered host on save deploy
      });
    }
  }

});
