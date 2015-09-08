import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['deployment', 'cloudforms'],

  cfmeRootPassword: Ember.computed.alias("controllers.deployment.model.cfme_root_password"),
  cfmeAdminPassword: Ember.computed.alias("controllers.deployment.model.cfme_admin_password"),
  isSubscriptions: Ember.computed.alias("controllers.deployment.isSubscriptions"),
  isStarted: Ember.computed.alias("controllers.deployment.isStarted"),
  notValidCloudforms: Ember.computed.alias("controllers.cloudforms.notValidCloudforms"),

  nextRouteNameAfterCFME: function() {
    if (this.get('isSubscriptions')) {
      return 'subscriptions';
    } else {
      return 'review';
    }
  }.property('isSubscriptions')
});
