import Ember from 'ember';

export default Ember.Route.extend({

  // If no model hook, then model is taken from parent route,
  // so model is "deployment"

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('showAlertMessage', false);
  },

  deactivate: function() {
    return this.send('saveDeployment', null);
  }

});
