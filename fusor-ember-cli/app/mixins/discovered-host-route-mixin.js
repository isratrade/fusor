import Ember from 'ember';

export default Ember.Mixin.create({

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
    }
  },

  setupController(controller, model) {
  },

  actions: {
    refreshDiscoveredHosts() {
      console.log('refresh allDiscoveredHosts');
      var controller = this.get('controller');
      controller.set('isLoadingHosts', true);
      this.store.findAll('discovered-host').then(function(results) {
        controller.set('allDiscoveredHosts', results.filterBy('is_discovered', true));
        controller.set('isLoadingHosts', false);
      });
    }
  }

});
