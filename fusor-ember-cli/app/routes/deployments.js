import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    sort_by: {
      refreshModel: true
    },
    dir: {
      refreshModel: true
    },
  },

  model(params) {
    // server-side deployments controller uses scoped search params[:order] for sorting
    let sort_by = params['sort_by'] || 'updated_at';
    let dir = params['dir'] || 'DESC';
    params['order'] = sort_by + ' ' + dir;
    return this.store.query('deployment', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('totalDeployments', model.get('meta.total'));
    controller.set('pageNumber', model.get('meta.page') || 1);
    controller.set('totalPages', model.get('meta.total_pages'));
    controller.set('pageRange', _.range(1, model.get('meta.total_pages') + 1));
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
