import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    /* Load pages of the Product Model, starting from page 1, in groups of 12. */
    return this.infinityModel("deployment", { perPage: 12, startingPage: 1 });
    // return Ember.RSVP.hash({
    //   deployments: this.infinityModel("deployment", {
    //     perPage: 12,
    //     startingPage: 1,
    //     modelPath: 'controller.model.deployments'
    //   })
    // })
  },

  actions: {
    deleteDeployment(item) {
      return this.store.findRecord('deployment', item.get('id')).then(function(deployment) {
        deployment.deleteRecord();
        deployment.save();
      });
    },

    willTransition() {
      this.controllerFor('deployment').set('backRouteNameOnSatIndex', 'deployments');
    }
  }

});
