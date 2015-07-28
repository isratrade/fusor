import Ember from 'ember';

export default Ember.Route.extend({

  model: function () {
      var deployment = this.modelFor('deployment');
//       var manage_content_task = null;
//       var deploy_task = this.store.query('foreman-task', {search: "parent_task_id = " + deployment.get('foreman_task_uuid')}).then(function(result) {
//         console.log('result IS');
//         debugger
// //        console.log(result.length);
//       });
     return this.store.findRecord('foreman-task', deployment.get('foreman_task_uuid'));
      // return Ember.RSVP.hash({
      //     deploy_task: deploy_task,
      //     manage_content_task: this.store.findRecord('foreman-task'),
      //     profiles: this.store.findRecord('flavor')
      // });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.startPolling();
  },

  deactivate: function() {
    this.get('controller').stopPolling();
  }

});
