import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['organization', 'organizations', 'satellite/index', 'application'],

  fields_org: {},

  showAlertMessage: false,

  disable1BNext: function() {
    return (!(this.get('selectedOrganization')));
  }.property('selectedOrganization'),

  deploymentName: Ember.computed.alias("controllers.satellite/index.name"),

  // default Organization name for New Organizations
  defaultOrgName: function () {
    return this.getWithDefault('defaultOrg', this.get('deploymentName'));
  }.property(),

  orgLabelName: function() {
    if(this.get('fields_org.name')) {
      return this.get('defaultOrgName').underscore();
    }
  }.property('defaultOrgName'),

  rhciModalButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createOrganization", type: 'primary'})
  ],

  actions: {
    selectOrganization: function(organization) {
      this.set('showAlertMessage', false);
      return this.set('selectedOrganization', organization )
    },

    createOrganization: function() {
      //if (this.get('fields_org.isDirty')) {
        var self = this;
        this.set('fields_org.name', this.get('defaultOrgName'));
        var organization = this.store.createRecord('organization', this.get('fields_org'));
        self.set('fields_org',{});
        self.set('defaultOrgName', null);
        self.set('selectedOrganization', organization);
        if (this.get('controllers.application.isLiveBackendMode')) {
          organization.save().then(function() {
            //success
            return self.set('showAlertMessage', true);
          }, function(response) {
            alert('error saving organization');
          //organization.destroyRecord();
          //organization.rollback()
          //organization.reload();
          //organization.unloadRecord();
          });
        }
      //}

      return Bootstrap.ModalManager.hide('newOrganizationModal');
    },
  }

});
