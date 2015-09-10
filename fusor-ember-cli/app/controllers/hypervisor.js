import Ember from 'ember';
// is this used
export default Ember.Controller.extend({
  needs: ['rhev'],

  hostNamingScheme: Ember.computed.alias("controllers.deployment.model.host_naming_scheme"),
  customPreprendName: Ember.computed.alias("controllers.deployment.model.custom_preprend_name"),

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
