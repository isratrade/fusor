import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['satellite', 'satellite/index', 'application', 'configure-organization'],

  organization_id: null,

  nonLibraryEnvironments: Ember.computed.filterBy('model', 'library', false),

  selectedOrganization: Ember.computed.alias("controllers.configure-organization.selectedOrganization"),

  disable1CNext: function() {
    return (this.get('selectedEnvironment.name.length') === 0);
  }.property('selectedEnvironment'),

  disableAll: Ember.computed.alias("controllers.satellite.disableAll"),

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),

  fields_env: {},

  showAlertMessage: false,

  rhciNewEnvButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createEnvironment", type: 'primary'})
  ],

  envLabelName: function() {
    if(this.get('fields_env.name')) {
      return this.get('fields_env.name').underscore();
    }
  }.property('fields_env.name'),

  actions: {

    selectEnvironment: function(environment) {
      console.log(environment.get('name'));
      this.set('showAlertMessage', false);
      return this.set('selectedEnvironment', environment)
    },

    createEnvironment: function() {
      var self = this;
      this.set('fields_env.prior', 1); ///GET LIBRARY ID FOR ORG AND MAKE THIS DYNAMIC
      var environment = this.store.createRecord('lifecycle-environment', this.get('fields_env'));
      this.set('selectedEnvironment', environment);
      this.set('fields_env',{});
      if (this.get('controllers.application.isLiveBackendMode')) {
        environment.save().then(function() {
          //success
        }, function(response) {
          alert('error saving environment');
        });
      }
      return Bootstrap.ModalManager.hide('newEnvironmentModal');
    },

    saveDeployment: function() {
      var deployment = this.store.createRecord('deployment', {name: this.get('controllers.satellite/index.name'),
                                    organization: this.get('selectedOrganization'),
                                    lifecycle_environment: this.get('selectedEnvironment') });
      if (this.get('controllers.application.isLiveBackendMode')) {
        deployment.save().then(function() {
          //success
          console.log('saved deployment');
        }, function(response) {
          alert('error saving deployment');
        });
      }
    },

  }

});
