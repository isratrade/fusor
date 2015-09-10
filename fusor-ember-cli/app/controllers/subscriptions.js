import Ember from 'ember';
import NeedsDeploymentMixin from "../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  needs: ['subscriptions/credentials', 'subscriptions/management-application'],

  stepNumberSubscriptions: Ember.computed.alias("controllers.deployment.stepNumberSubscriptions"),

  disableTabManagementApplication: function() {
     return (!this.get('isStarted') && !this.get('model.isAuthenticated'));
  }.property('model.isAuthenticated', 'isStarted'),

  upstreamConsumerUuid: Ember.computed.alias("controllers.deployment.model.upstream_consumer_uuid"),

  disableTabSelectSubsciptions: function() {
    return (Ember.isBlank(this.get('upstreamConsumerUuid')) || !this.get('model.isAuthenticated'));
  }.property('model.isAuthenticated', 'upstreamConsumerUuid')

});
