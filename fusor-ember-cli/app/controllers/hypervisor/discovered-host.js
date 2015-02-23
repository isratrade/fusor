import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['engine/discovered-host'],

  engineIdSelected: Ember.computed.alias("controllers.engine/discovered-host.engineIdSelected"),

  selectedHosts: Em.computed.filterBy('model', 'isSelectedAsHypervisor', true),

  availableHosts: Ember.computed.filter('model', function(host, index, array) {
    return (host.get('id') != this.get('engineIdSelected'));
  }).property('model', 'engineIdSelected'),

  // TODO Why didn't this work???
  // selectedHosts: function() {
  //   return this.filter(function(item, index, enumerable){
  //     return (item.isSelectedAsHypervisor);
  //   });
  // }.property('model.@each.isSelectedAsHypervisor')

  cntSelectedHosts: Em.computed.alias('selectedHosts.length'),

  // hypervisorHostId: function() {
  //   return this.get('selectedHosts.length');
  // }.property('selectedHosts'),


  // TODO Why didn't this work???
  // numSelectedHosts: function() {
  //   return this.get('selectedHosts').get('length');
  // }.property('selectedHosts'),

  hostInflection: function() {
    return this.get('cntSelectedHosts') === 1 ? 'host' : 'hosts';
  }.property('cntSelectedHosts'),

  allChecked: function(key, value){
    if (arguments.length === 1) {
      var model = this.get('model');
      return model && model.isEvery('isSelectedAsHypervisor');
    } else {
      this.get('model').setEach('isSelectedAsHypervisor', value);
      return value;
    }
  }.property('model.@each.isSelectedAsHypervisor'),

  idChecked: function(key){
    var model = this.get('model');
    if (model && model.isAny('isSelectedAsHypervisor')) {
      return this.get('selectedHosts').getEach("id"); //this.//   return model && model.isEvery('isSelectedAsHypervisor');
    } else {
      return '';
    }
    // } else {
    //   this.get('model').setEach('isSelectedAsHypervisor', value);
    //   return value;
    // }
  }.property('model.@each.isSelectedAsHypervisor', 'selectedHosts'),

});
