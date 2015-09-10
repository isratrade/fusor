import Ember from 'ember';
import NeedsDeploymentMixin from "../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  needs: ['satellite', 'application'],

  name: Ember.computed.alias("controllers.deployment.name"),
  description: Ember.computed.alias("controllers.deployment.description"),

  organizationTabRouteName: Ember.computed.alias("controllers.deployment.organizationTabRouteName"),

  disableNextOnDeploymentName: Ember.computed.alias("controllers.deployment.disableNextOnDeploymentName"),

  idSatName: 'deployment_sat_name',
  idSatDesc: 'deployment_sat_desc',

  backRouteNameOnSatIndex: 'deployment.start',

  deploymentNames: Ember.computed.alias("controllers.application.deploymentNames")

});
