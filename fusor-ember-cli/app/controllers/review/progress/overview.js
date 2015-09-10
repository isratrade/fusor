import Ember from 'ember';
import ProgressBarMixin from "../../../mixins/progress-bar-mixin";
import NeedsDeploymentMixin from "../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(ProgressBarMixin, NeedsDeploymentMixin, {

  isRhev: Ember.computed.alias("controllers.deployment.isRhev"),
  isOpenStack: Ember.computed.alias("controllers.deployment.isOpenStack"),
  isCloudForms: Ember.computed.alias("controllers.deployment.isCloudForms"),

  nameRHCI: Ember.computed.alias("controllers.deployment.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.deployment.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.deployment.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.deployment.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.deployment.nameSatellite"),
  progressDeployment: Ember.computed.alias("deployTask.progress"),
  resultDeployment: Ember.computed.alias("deployTask.result"),
  stateDeployment: Ember.computed.alias("deployTask.state"),

  deployTaskIsStopped: function() {
    return ((this.get('stateDeployment') === 'stopped') || (this.get('stateDeployment') === 'paused'));
  }.property('stateDeployment'),

  deployTaskIsFinished: function() {
    return ((this.get('progressDeployment') === '1') && (this.get('resultDeployment') === 'success'));
  }.property('progressDeployment', 'resultDeployment'),

  getOpenstackParamValue: function(paramName, params) {
    var paramValue = null;
    var numParams = params.get('length');
    for (var i=0; i<numParams; i++) {
      var param = params.objectAt(i);
      if (param.get('id') === paramName) {
        paramValue = param.get('value');
        break;
      }
    }
    return paramValue;
  },

  openstackIsFinished: function() {
    return (this.get('model.openstackDeployment.stack_status') == 'CREATE_COMPLETE');
  }.property('model.openstackDeployment.stack_status'),

  openstackIsError: function() {
    return (this.get('model.openstackDeployment.stack_status') == 'CREATE_FAILED');
  }.property('model.openstackDeployment.stack_status'),

  openstackProvisionedNodeCount: function() {
    var count = 0;
    this.get('model.openstackNodes').forEach(function(node) {
      if (node.get('provision_state') == 'active') {
        count++;
      }
    });
    return count;
  }.property('model.openstackNodes'),

  openstackPlannedNodeCount: function() {
    var count = 0;
    var params = this.get('model.openstackPlan.parameters');
    var self = this;
    this.get('model.openstackPlan.roles').forEach(function (role) {
      count += parseInt(self.getOpenstackParamValue(role.get('countParameterName'), params), 10);
    });
    return count;
  }.property('model.openstackPlan'),

  openstackDeploymentPercent: function() {
    if (this.get('openstackIsFinished')) {
      return 100;
    }
    // start at 5%; allocate 75% for node provisioning;
    // save 20% for post-provisioning setup
    var nodePercentage = 75 * (this.get('openstackProvisionedNodeCount') / this.get('openstackPlannedNodeCount'));
    return 5 + nodePercentage;
  }.property('model.openstackDeployment.stack_status')

});
