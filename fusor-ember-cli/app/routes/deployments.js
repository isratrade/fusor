import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    return this.infinityModel("deployment", { perPage: 20, startingPage: 1 });
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
