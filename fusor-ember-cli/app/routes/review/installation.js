import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var deployment = this.modelFor('deployment');

    return Ember.RSVP.hash({
        deployment: deployment,
        openstackPlan: (deployment.get('isOpenStack') ? this.store.find('deployment-plan', 'overcloud') : []),
        openstackNodes: (deployment.get('isOpenStack') ? this.store.find('node') : []),
        openstackProfiles: (deployment.get('isOpenStack') ? this.store.find('flavor') : [])
    });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('showSpinner', false);
    controller.set('showErrorMessage', false);
    this.store.find('hostgroup').then(function(results) {
        var fusorBaseDomain = results.filterBy('name', 'Fusor Base').get('firstObject').get('domain.name');
        controller.set('engineDomain', fusorBaseDomain);
        controller.set('hypervisorDomain', fusorBaseDomain);
    });
    return this.modelFor('deployment');
  }

});
