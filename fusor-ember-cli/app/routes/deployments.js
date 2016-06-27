import Ember from 'ember';
import InfiniteScrollRouteMixin from 'ember-cli-infinite-scroll/mixins/infinite-scroll-route';

export default Ember.Route.extend(InfiniteScrollRouteMixin, {
  model() {
//    return this.store.findAll('deployment');
    return this.infiniteQuery('deployment');
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
