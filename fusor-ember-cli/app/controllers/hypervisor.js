import Ember from 'ember';
import NeedsDeploymentMixin from "../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  hostNamingScheme: Ember.computed.alias("deploymentController.model.host_naming_scheme"),
  customPreprendName: Ember.computed.alias("deploymentController.model.custom_preprend_name"),

  namingOptions: ['Freeform', 'MAC address', 'hypervisorN', 'Custom scheme'],

  isFreeform: function() {
    return (this.get('hostNamingScheme') === 'Freeform');
  }.property('hostNamingScheme'),

  isMac: function() {
    return (this.get('hostNamingScheme') === 'MAC address');
  }.property('hostNamingScheme'),

  isCustomScheme: function() {
    return (this.get('hostNamingScheme') === 'Custom scheme');
  }.property('hostNamingScheme'),

  isHypervisorN: function() {
    return (this.get('hostNamingScheme') === 'hypervisorN');
  }.property('hostNamingScheme')

});
