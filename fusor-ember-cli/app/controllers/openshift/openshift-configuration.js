import Ember from 'ember';
import NeedsDeploymentMixin from "../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  openshiftController: Ember.inject.controller('openshift'),

  isCloudForms: Ember.computed.alias("deploymentController.isCloudForms"),
  isSubscriptions: Ember.computed.alias("deploymentController.isSubscriptions"),

  nextRouteNameAfterOpenshift: Ember.computed(
    'isCloudForms',
    'isSubscriptions',
    function() {
        if (this.get('isCloudForms')) {
          return 'cloudforms';
        } else if (this.get('isSubscriptions')) {
          return 'subscriptions';
        } else {
          return 'review';
        }
    }
  ),

  openshiftUsernameValidator: Ember.computed.alias("openshiftController.openshiftUsernameValidator"),
  isValidOpenshiftConfiguration: Ember.computed.alias("openshiftController.isValidOpenshiftConfiguration"),
  isInvalidOpenshiftConfiguration: Ember.computed.alias("openshiftController.isInvalidOpenshiftConfiguration"),

});

