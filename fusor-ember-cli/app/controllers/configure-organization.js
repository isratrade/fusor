import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['organization', 'organizations', 'satellite/index', 'application'],

  fields_org: {},

  selectedOrganzation: null,

  disable1BNext: function() {
    if (this.get('selectedOrganzation')) {
      return (this.get('selectedOrganzation.name.length') === 0);
    } else {
      return true
    }
  }.property('selectedOrganzation'),

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

  selectedOrganzationId: function() {
    if (this.get('selectedOrganzation')) {
      return this.get('selectedOrganzation').get('id');
    } else {
      return 0;
    }
  }.property('selectedOrganzation'),

  rhciModalButtons: [
      Ember.Object.create({title: 'Cancel', clicked:"cancel", dismiss: 'modal'}),
      Ember.Object.create({title: 'Create', clicked:"createOrganization", type: 'primary'})
  ],

  actions: {
    selectOrganization: function(organization) {
      return this.set('selectedOrganzation', organization )
    },

    createOrganization: function() {
      //if (this.get('fields_org.isDirty')) {
        var self = this;
        this.set('fields_org.name', this.get('defaultOrgName'));
        var organization = this.store.createRecord('organization', this.get('fields_org'));
        self.set('fields_org',{});
        self.set('selectedOrganzation', organization);
        if (this.get('controllers.application.isLiveBackendMode')) {
          organization.save().then(function() {
            //success
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
