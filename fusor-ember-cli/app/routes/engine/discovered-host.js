import Ember from 'ember';
import DiscoveredHostRouteMixin from "../../mixins/discovered-host-route-mixin";
import _ from 'lodash/lodash';

export default Ember.Route.extend(DiscoveredHostRouteMixin, {
  model(params) {
    const engine_host = this.modelFor('deployment').get('discovered_host');
    const discovered_hosts = this.getDiscoveredHosts(params);
    return Ember.RSVP.hash({
      engine_host,
      discovered_hosts
    });
  },

  getDiscoveredHosts(params) {
    var controller = this.controllerFor('engine/discovered_host');
    if (this.modelFor('deployment').get('isNotStarted')) {
      let sort_by = params['sort_by'] || 'name';
      let dir = params['dir'] || 'ASC';
      let page = params['page'] || 1;
      params['order'] = sort_by + ' ' + dir;
      controller.set('isLoadingHosts', true);
      return this.store.query('discovered-host', params).then(function(results) {
        controller.set('allDiscoveredHosts', results.filterBy('is_discovered', true));
        controller.set('totalDiscoveredHosts', results.get('meta.total'));
        controller.set('pageNumber', results.get('meta.page'));
        controller.set('totalPages', results.get('meta.total_pages'));
        controller.set('pageRange', _.range(1, results.get('meta.total_pages') + 1));
        controller.set('isLoadingHosts', false);
      });
    }
  },

  deactivate() {
    return this.send('saveDeployment', null);
  }

});
