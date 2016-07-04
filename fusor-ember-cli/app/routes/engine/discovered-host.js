import Ember from 'ember';
import DiscoveredHostRouteMixin from "../../mixins/discovered-host-route-mixin";
import _ from 'lodash/lodash';

export default Ember.Route.extend(DiscoveredHostRouteMixin, {
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

  model(params) {
    const engine_host = this.modelFor('deployment').get('discovered_host');
    const discovered_hosts = this.getDiscoveredHosts(params);
    return Ember.RSVP.hash({
      engine_host,
      discovered_hosts
    });
  },

  deactivate() {
    return this.send('saveDeployment', null);
  }

});
