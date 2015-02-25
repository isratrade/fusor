import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
//    TODO after here selectOrganizationId
    return this.store.find('lifecycle-environment');
  },

  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '44'); //route-configure-environment
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }

});
