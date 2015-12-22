import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.modelFor('deployment');
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('hypervisors', this.modelFor('deployment').get('discovered_hosts'));
  },

  actions: {
    addAnotherHypervisor() {
      var hyper = this.store.createRecord('discovered-host');
      return this.get('controller.hypervisors').addObject(hyper);
    },

    deleteHypervisor(hyp) {
        return this.get('controller.hypervisors').removeObject(hyp);
    },

    saveAllHypervisors() {
      var self = this;
      var token = Ember.$('meta[name="csrf-token"]').attr('content');

      var hyperIds = this.get('controller.hypervisors').getEach('id');

      var hyperNames = this.get('controller.hypervisors').getEach('name');

      alert(hyperNames);

      // request({
      //       url: '/fusor/api/v21/deployments/' + deployment.get('id'),
      //       type: "PUT",
      //       data: JSON.stringify({'deployment': { 'discovered_host_ids': hyperIds } }),
      //       headers: {
      //           "Accept": "application/json",
      //           "Content-Type": "application/json",
      //           "X-CSRF-Token": token,
      //           "Authorization": "Basic " + self.get('session.basicAuthToken')
      //       }
      //     }).then(function(response) {
      //         if (redirectPath) {
      //           self.transitionTo('rhev-options');
      //         }
      //       },
      //         function(error) {
      //         console.log(error);
      //       }
      // );
    }
  }


});
