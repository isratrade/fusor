import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var orgId = this.controllerFor('configure-organization').get('selectedOrganzationId');
    return this.store.find('lifecycle-environment', {organization_id: orgId});
  },

  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '44'); //route-configure-environment
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }

});
