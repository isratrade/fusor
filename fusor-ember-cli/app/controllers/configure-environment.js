import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['satellite', 'application', 'configure-organization'],
  queryParams: ['organization_id'],

  organization_id: null,

  nonLibraryEnvironments: Ember.computed.filterBy('model', 'library', false),

  selectedOrganzation: Ember.computed.alias("controllers.configure-organization.selectedOrganzation"),
  selectedOrganzationId: Ember.computed.alias("controllers.configure-organization.selectedOrganzationId"),
  selectedOrganzationName: Ember.computed.alias("controllers.configure-organization.selectedOrganzationName"),

  disable1CNext: function() {
    return (this.get('selectedEnvironment.length') === 0);
  }.property('selectedEnvironment'),

  disableAll: Ember.computed.alias("controllers.satellite.disableAll"),

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),

  fields_env: {},

  selectedEnvironment: '',   //MAKE '' WHEN PACKAGING

  rhciNewEnvButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createEnvironment", type: 'primary'})
  ],

  envLabelName: function() {
    if(this.get('fields_env.name')) {
      return this.get('fields_env.name').underscore();
    }
  }.property('fields_env.name'),

  // hasEnvironments: function() {
  //   return (this.get('length') > 0);
  // }.property('model.@each.[]'),

  actions: {
    createEnvironment: function() {
      var self = this;
      var environment = this.store.createRecord('lifecycle-environment', this.get('fields_env'));
      this.set('selectedEnvironment', environment.get('name'));
      this.set('fields_env',{});
      if (this.get('controllers.application.isLiveBackendMode')) {
        environment.save().then(function() {
          //success
        }, function(response) {
          alert('error saving environment');
        });
      }
      return Bootstrap.ModalManager.hide('newEnvironmentModal');
    }

  }

});
