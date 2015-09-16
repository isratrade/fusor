import Ember from 'ember';
import StartControllerMixin from "../../mixins/start-controller-mixin";

export default Ember.Controller.extend(StartControllerMixin, {

  needs: ['deployment'],

  isRhev: Ember.computed.alias("controllers.deployment.model.deploy_rhev"),
  isOpenStack: Ember.computed.alias("controllers.deployment.model.deploy_openstack"),
  isCloudForms: Ember.computed.alias("controllers.deployment.model.deploy_cfme"),
  isOpenShift: Ember.computed.alias("controllers.deployment.model.deploy_openshift"),
  isSubscriptions: Ember.computed.alias("controllers.deployment.model.isSubscriptions")

});
