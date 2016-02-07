import Ember from 'ember';
import NeedsDeploymentMixin from "../mixins/needs-deployment-mixin";
import { AggregateValidator, PresenceValidator, AlphaNumericDashUnderscoreValidator } from '../utils/validators';

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  stepNumberOpenShift: Ember.computed.alias("deploymentController.stepNumberOpenShift"),

  isValidOpenshiftNodes: Ember.computed('model.openshift_install_loc',
                                        'model.openshift_number_nodes',
                                        'model.openshift_storage_size', function() {
      return (Ember.isPresent(this.get('model.openshift_install_loc')) &&
              Ember.isPresent(this.get('model.openshift_number_nodes')) &&
              Ember.isPresent(this.get('model.openshift_storage_size')) );
  }),
  isInvalidOpenshiftNodes: Ember.computed.not("isValidOpenshiftNodes"),

  openshiftUsernameValidator: AggregateValidator.create({
    validators: [
      PresenceValidator.create({}),
      AlphaNumericDashUnderscoreValidator.create({})
    ]
  }),

  isValidOpenshiftConfiguration: Ember.computed('model.openshift_username', function() {
    return this.get('openshiftUsernameValidator').isValid(this.get('model.openshift_username'));
  }),
  isInvalidOpenshiftConfiguration: Ember.computed.not("isValidOpenshiftConfiguration"),

  validOpenshift: Ember.computed('isValidOpenshiftNodes', 'isValidOpenshiftConfiguration', function() {
      return this.get('isValidOpenshiftNodes') && this.get('isValidOpenshiftConfiguration');
  })

});
