import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    controller.set('model', model);
    //Comment out lines below - DEV only to save time
    // controller.set('name', 'default deployment name');
    // this.controllerFor('configure-organization').set('selectedOrganization', model.sortBy('id').objectAt(1));
  },

  activate: function() {
    this.controllerFor('side-menu').set('etherpadName', '41'); //route-satellite
  },

  deactivate: function() {
    this.controllerFor('side-menu').set('etherpadName', '');
  }
});
