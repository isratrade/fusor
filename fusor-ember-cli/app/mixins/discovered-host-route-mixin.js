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

  actions: {
    refreshDiscoveredHosts() {
      console.log('refresh allDiscoveredHosts');
      var self = this;
      var controller = this.controllerFor('engine/discovered_host');
      controller.set('isLoadingHosts', true);
      this.store.query('discovered-host', {}).then(function(results) {
        controller.set('isLoadingHosts', false);
        controller.set('allDiscoveredHosts', results.filterBy('is_discovered', true));
        controller.set('totalDiscoveredHosts', results.get('meta.total'));
        controller.set('pageNumber', results.get('meta.page'));
        controller.set('totalPages', results.get('meta.total_pages'));
        controller.set('pageRange', _.range(1, results.get('meta.total_pages') + 1));
        controller.set('isLoadingHosts', false);
      });
    }
  }

});
