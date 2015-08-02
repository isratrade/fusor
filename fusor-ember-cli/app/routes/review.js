import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
      var uuid = this.modelFor('deployment').get('foreman_task_uuid');
      return this.store.find('foreman-task', uuid);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    var stepNumberReview = this.controllerFor('deployment').get('stepNumberReview');
    return this.controllerFor('deployment').set('currentStepNumber', stepNumberReview);
  },

});
