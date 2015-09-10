import Ember from 'ember';
import NeedsDeploymentMixin from "../../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  isRhev: Ember.computed.alias('controllers.deployment.isRhev'),
  isOpenStack: Ember.computed.alias('controllers.deployment.isOpenStack'),
  isCloudForms: Ember.computed.alias('controllers.deployment.isCloudForms'),

  selectedRhevEngine: Ember.computed.alias("controllers.deployment.model.discovered_host"),

  // TODO - make mixin, same method as installation
  engineNamePlusDomain: function() {
    if (this.get("selectedRhevEngine.is_discovered")) {
      // need to add domain for discovered host to make fqdn
      // TODO - dynamically get domain name of hostgroup Fusor Base if is not example.com
      return (this.get("selectedRhevEngine.name") + '.example.com');
    } else {
      // name is fqdn for managed host
      return (this.get("selectedRhevEngine.name"));
    }
  }.property('selectedRhevEngine'),

  rhevEngineUrl: function() {
    return ('https://' + this.get('selectedRhevEngine.ip') + '/ovirt-engine/');
  }.property('selectedRhevEngine'),

  cfmeUrl: function() {
    return ('https://' + this.get('model.cfme_address'));
  }.property('model.cfme_address')

});
