import Ember from 'ember';
import DeploymentControllerMixin from "../mixins/deployment-controller-mixin";
import DisableTabMixin from "../mixins/disable-tab-mixin";

export default Ember.Controller.extend(DeploymentControllerMixin, DisableTabMixin, {

  deploymentsController: Ember.inject.controller('deployments'),
  configureEnvironmentController: Ember.inject.controller('configure-environment'),
  rhevController: Ember.inject.controller('rhev'),
  openstackController: Ember.inject.controller('openstack'),
  cloudformsController: Ember.inject.controller('cloudforms'),
  credentialsController: Ember.inject.controller('subscriptions/credentials'),
  selectSubscriptionsController: Ember.inject.controller('subscriptions/select-subscriptions'),

  routeNameSatellite: 'satellite',

  useDefaultOrgViewForEnv: Ember.computed.alias("configureEnvironmentController.useDefaultOrgViewForEnv"),

  isOpenModal: Ember.computed.alias("deploymentsController.isOpenModal"),
  deploymentInModal: Ember.computed.alias("deploymentsController.deploymentInModal"),

  validRhev: Ember.computed.alias("rhevController.validRhev"),
  validOpenStack: Ember.computed.alias("openstackController.validOpenStack"),
  validCloudforms: Ember.computed.alias("cloudformsController.validCloudforms"),
  disableNextOnSelectSubscriptions: Ember.computed.alias("selectSubscriptionsController.disableNextOnSelectSubscriptions"),
  isDisconnected: Ember.computed.alias("model.is_disconnected"),

  isDisabledRhev: Ember.computed.alias("satelliteInvalid"),

  isDisabledOpenstack: function() {
    return (this.get('satelliteInvalid') ||
            (this.get('isRhev') && !(this.get('validRhev')))
           );
  }.property("satelliteInvalid", 'isRhev', 'validRhev'),

  isDisabledCloudForms: function() {
    return (this.get('satelliteInvalid') ||
            (this.get('isRhev') && !(this.get('validRhev'))) ||
            (this.get('isOpenStack') && !(this.get('validOpenStack')))
            );
  }.property("satelliteInvalid", 'isRhev', 'isOpenStack', 'validRhev', 'validOpenStack'),

  isDisabledSubscriptions: function() {
    return (this.get('satelliteInvalid') ||
            (this.get('isRhev') && !(this.get('validRhev'))) ||
            (this.get('isOpenStack') && !(this.get('validOpenStack'))) ||
            (this.get('isCloudForms') && !(this.get('validCloudforms')))
           );
  }.property("satelliteInvalid", 'isRhev', 'isOpenStack', 'validRhev', 'validOpenStack', 'isCloudForms', 'validCloudforms'),


  hasSubscriptionUUID: function() {
    return (Ember.isPresent(this.get('organizationUpstreamConsumerUUID')) ||
            Ember.isPresent(this.get('model.upstream_consumer_uuid'))
           );
  }.property('organizationUpstreamConsumerUUID', 'model.upstream_consumer_uuid'),

  isDisabledReview: function() {
    return (!this.get('isDisconnected') && (this.get('isDisabledSubscriptions') || !this.get("hasSubscriptionUUID") || this.get('disableNextOnSelectSubscriptions')));
  }.property('isDisconnected', 'isDisabledSubscriptions', 'hasSubscriptionUUID', 'disableNextOnSelectSubscriptions'),

  hasLifecycleEnvironment: function() {
    return (!!(this.get('model.lifecycle_environment.id')) || this.get('useDefaultOrgViewForEnv'));
  }.property('model.lifecycle_environment', 'useDefaultOrgViewForEnv'),
  hasNoLifecycleEnvironment: Ember.computed.not('hasLifecycleEnvironment'),

  satelliteInvalid: Ember.computed.or('hasNoName', 'hasNoOrganization', 'hasNoLifecycleEnvironment'),

  skipContent: false,

  numSubscriptionsRequired: function() {
    var num = 0;
    if (this.get('isRhev')) {
      num = num + 1 + this.get('model.discovered_hosts.length'); // 1 is for engine
    }
    if (this.get('isCloudForms')) {
      num = num + 1;
    }
    return num;
  }.property('isRhev', 'isOpenStack', 'isCloudForms', 'model.discovered_hosts.[]'),

  managementApplicationName: function() {
    if (Ember.isPresent(this.get('model.upstream_consumer_name'))) {
      return this.get('model.upstream_consumer_name');
    } else {
      return this.get('credentialsController.organizationUpstreamConsumerName');
    }
  }.property('model.upstream_consumer_name', 'credentialsController.organizationUpstreamConsumerName'),

  hasEngine: function() {
    return Ember.isPresent(this.get("model.discovered_host.id"));
  }.property('model.discovered_host.id'),
  hasNoEngine: Ember.computed.not('hasEngine'),

  cntHypervisors: function() {
    return this.get('model.discovered_hosts.length');
  }.property('model.discovered_hosts.[]'),

  hasHypervisors: function() {
    return (this.get('cntHypervisors') > 0);
  }.property('cntHypervisors'),
  hasNoHypervisors: Ember.computed.not('hasHypervisors'),

  isStarted: function() {
    return !!(this.get('model.foreman_task_uuid'));
  }.property('model.foreman_task_uuid'),
  isNotStarted: Ember.computed.not('isStarted'),

  isFinished: function() {
    return (this.get('model.progress') === '1');
  }.property('model.progress'),
  isNotFinished: Ember.computed.not('isFinished'),

  cntSubscriptions: function() {
    return this.get('model.subscriptions.length');
  }.property('model.subscriptions.[]'),

  hasSubscriptions: function() {
    return (this.get('cntSubscriptions') > 0);
  }.property('cntSubscriptions'),
  hasNoSubscriptions: Ember.computed.not('hasSubscriptions')

});
