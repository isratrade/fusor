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

  getDiscoveredHosts(params) {
    // note, this function does NOT set isLoadingHosts to true and then false
    // otherwise, it would show the loading spinner for each search and sort
    var controller = this.controllerFor('engine/discovered_host');
    if (this.modelFor('deployment').get('isNotStarted')) {
      let sort_by = params['sort_by'] || 'name';
      let dir = params['dir'] || 'ASC';
      let page = params['page'] || 1;
      params['order'] = sort_by + ' ' + dir;
      return this.store.query('discovered-host', params).then(function(results) {
        controller.set('allDiscoveredHosts', results.filterBy('is_discovered', true));
        controller.set('totalDiscoveredHosts', results.get('meta.total'));
        controller.set('pageNumber', results.get('meta.page'));
        controller.set('totalPages', results.get('meta.total_pages'));
        controller.set('pageRange', _.range(1, results.get('meta.total_pages') + 1));
      });
    }
  },

  actions: {
    refreshDiscoveredHosts() {
      console.log('refresh allDiscoveredHosts');
      let controller = this.get('controller');
      controller.set('isLoadingHosts', true);
      this.store.query('discovered-host', {page: 1, search: ''}).then(function(results) {
        controller.set('isLoadingHosts', false);
        controller.set('page', 1);
        controller.set('search', '');
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
