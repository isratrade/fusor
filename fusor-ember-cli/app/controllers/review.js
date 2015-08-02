import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['subscriptions', 'application', 'deployment', 'review/progress/overview'],

  isUpstream: Ember.computed.alias("controllers.application.isUpstream"),
  disableNext: Ember.computed.alias("controllers.subscriptions.disableNext"),

  nameSelectSubscriptions: Ember.computed.alias("controllers.deployment.nameSelectSubscriptions"),

  stepNumberReview: Ember.computed.alias("controllers.deployment.stepNumberReview"),

  valueProgress: function() {
    if (this.get('model.state') === 'planning') {
        return 0.1;
    } else if (this.get('model.state')) {
        return (this.get('model.progress') * 100);
    } else {
        return 0;
    }
  }.property('model.progress'),

  // this is checking only the Deploy task, not the children
  isFinished: function() {
    return (this.get('valueProgress') === 100);
  }.property('valueProgress'),

  disableTabInstallation: function() {
    return (this.get('disableNext') && (!(this.get('isUpstream'))));
  }.property('disableNext', 'isUpstream'),

  disableTabProgress: function() {
    return !(this.get('controllers.deployment.isStarted'));
  }.property('controllers.deployment.isStarted'),

  disableTabSummary: function() {
    return !this.get('isFinished');
  }.property('isFinished'),

});
