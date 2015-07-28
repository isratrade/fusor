import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var foreman_task_uuid = this.modelFor('deployment').get('foreman_task_uuid');
    return this.store.findRecord('foreman-task', foreman_task_uuid );
  }
});
