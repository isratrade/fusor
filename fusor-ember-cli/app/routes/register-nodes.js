import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
      var deploymentId = this.modelFor('deployment').get('id');
      return Ember.RSVP.hash({
          nodes: this.store.query('node', {deployment_id: deploymentId}),
          profiles: this.store.query('flavor', {deployment_id: deploymentId})
      });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('showAlertMessage', false);
    var self = this;

    var introspection_tasks = this.modelFor('deployment').get('introspection_tasks');

    // TODO - use forEach with index rather than limiting to 5 tasks.
    if (introspection_tasks.objectAt(0)) {
      var taskUuid_1 = introspection_tasks.objectAt(0).get('task_id');
      this.store.query('foreman-task', {search: "id = " + taskUuid_1}).then(function(result) {
        controller.set('taskRegisterNode_1', result.get('firstObject'));
      });
    }
    if (introspection_tasks.objectAt(1)) {
      var taskUuid_2 = introspection_tasks.objectAt(1).get('task_id');
      this.store.query('foreman-task', {search: "id = " + taskUuid_2}).then(function(result) {
        controller.set('taskRegisterNode_2', result.get('firstObject'));
      });
    }
    if (introspection_tasks.objectAt(2)) {
      var taskUuid_3 = introspection_tasks.objectAt(2).get('task_id');
      this.store.query('foreman-task', {search: "id = " + taskUuid_3}).then(function(result) {
        controller.set('taskRegisterNode_3', result.get('firstObject'));
      });
    }
    if (introspection_tasks.objectAt(3)) {
      var taskUuid_4 = introspection_tasks.objectAt(3).get('task_id');
      this.store.query('foreman-task', {search: "id = " + taskUuid_4}).then(function(result) {
        controller.set('taskRegisterNode_4', result.get('firstObject'));
      });
    }
    if (introspection_tasks.objectAt(4)) {
      var taskUuid_5 = introspection_tasks.objectAt(4).get('task_id');
      this.store.query('foreman-task', {search: "id = " + taskUuid_5}).then(function(result) {
        controller.set('taskRegisterNode_5', result.get('firstObject'));
      });
    }

    var deploymentId = this.modelFor('deployment').get('id');
    this.store.query('image', {deployment_id: deploymentId}).then(function(results) {
      var bmDeployKernelImage = results.findBy('name', 'bm-deploy-kernel');
      var bmDeployRamdiskImage = results.findBy('name', 'bm-deploy-ramdisk');
      controller.set('bmDeployKernelImage', bmDeployKernelImage);
      controller.set('bmDeployRamdiskImage', bmDeployRamdiskImage);
    });

    controller.stopPolling();
    controller.startPolling();
  },

  deactivate: function() {
    return this.get('controller').stopPolling();
  },

  actions: {
    refreshModelOnOverviewRoute: function(){
        console.log('refreshing introspection progress bar tasks');
        var controller = this.get('controller');
        var introspection_tasks = this.modelFor('deployment').get('introspection_tasks');
        // TODO - use forEach with index rather than limiting to 5 tasks.
        if (introspection_tasks.objectAt(0)) {
          var taskUuid_1 = introspection_tasks.objectAt(0).get('task_id');
          this.store.query('foreman-task', {search: "id = " + taskUuid_1}).then(function(result) {
              controller.set('taskRegisterNode_1', result.get('firstObject'));
          });
        }
        if (introspection_tasks.objectAt(1)) {
          var taskUuid_2 = introspection_tasks.objectAt(1).get('task_id');
          this.store.query('foreman-task', {search: "id = " + taskUuid_2}).then(function(result) {
            controller.set('taskRegisterNode_2', result.get('firstObject'));
          });
        }
        if (introspection_tasks.objectAt(2)) {
          var taskUuid_3 = introspection_tasks.objectAt(2).get('task_id');
          this.store.query('foreman-task', {search: "id = " + taskUuid_3}).then(function(result) {
            controller.set('taskRegisterNode_3', result.get('firstObject'));
          });
        }
        if (introspection_tasks.objectAt(3)) {
          var taskUuid_4 = introspection_tasks.objectAt(3).get('task_id');
          this.store.query('foreman-task', {search: "id = " + taskUuid_4}).then(function(result) {
            controller.set('taskRegisterNode_4', result.get('firstObject'));
          });
        }
        if (introspection_tasks.objectAt(4)) {
          var taskUuid_5 = introspection_tasks.objectAt(4).get('task_id');
          this.store.query('foreman-task', {search: "id = " + taskUuid_5}).then(function(result) {
            controller.set('taskRegisterNode_5', result.get('firstObject'));
          });
        }
    }
  }

});
