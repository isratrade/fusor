import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";
const ISLOADED = false;

export default Ember.Route.extend(InfinityRoute, {
  queryParams: {
    dir: {
      refreshModel: true
    },
    sort_by: {
      refreshModel: true
    }
  },

  model(params) {
    // server-side deployments controller uses scoped search params[:order] for sorting
    let sort_by = params['sort_by'] || 'name';
    let dir = params['dir'] || 'ASC';
    params['order'] = sort_by + ' ' + dir;
    // this.
    return this.infinityModel("deployment", params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('totalDeployments', model.get('meta.total'));
  },

  infinityModelLoaded(lastPageLoaded, totalPages, infinityModel) {
    this.get('controller').set('isFullyLoaded', true);
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
