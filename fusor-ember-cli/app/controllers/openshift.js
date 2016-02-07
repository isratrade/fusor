import Ember from 'ember';
import NeedsDeploymentMixin from "../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  stepNumberOpenShift: Ember.computed.alias("deploymentController.stepNumberOpenShift"),

  isValidOpenshiftInstallLocation: Ember.computed.notEmpty('deploymentController.model.openshift_install_loc'),
  isInvalidOpenshiftInstallLocation: Ember.computed.not("isValidOpenshiftInstallLocation"),

  isValidOpenshiftNodes: true, //TODO
  isValidOpenshiftConfiguration: true, //TODO

  validOpenshift: Ember.computed('isValidOpenshiftNodes', 'isValidOpenshiftConfiguration', function() {
      return this.get('isValidOpenshiftNodes') && this.get('isValidOpenshiftConfiguration');
  })

});
