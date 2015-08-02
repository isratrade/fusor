import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['deployment', 'review/installation', 'review'],

  isRhev: Ember.computed.alias('controllers.deployment.isRhev'),
  isOpenStack: Ember.computed.alias('controllers.deployment.isOpenStack'),
  isCloudForms: Ember.computed.alias('controllers.deployment.isCloudForms'),

  isFinished: Ember.computed.alias("controllers.review.isFinished"),

 // selectedRhevEngine: Ember.computed.alias("controllers.deployment.model.discovered_host"),

  rhevEngineUrl: function() {
    if (this.get('isFinished')) {
        return ('https://' +
                this.get('controllers.review/installation.selectedRhevEngine.name') +
                '/ovirt-engine/');
    } else {
        return ('https://' +
                this.get('controllers.review/installation.selectedRhevEngine.name') +
                '/ovirt-engine/');
    }
  }.property('controllers.review/installation.selectedRhevEngine.name', 'isFinished'),

  cfmeUrl: function() {
    return ('https://' + this.get('controllers.deployment.model.cfme_address'));
  }.property('controllers.deployment.model.cfme_address')

});
