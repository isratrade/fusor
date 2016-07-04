import Ember from 'ember';
import DiscoveredHostRouteMixin from "../../mixins/discovered-host-route-mixin";

export default Ember.Route.extend(DiscoveredHostRouteMixin, {
  model(params) {
    const deployment = this.modelFor('openshift');
    const discovered_host = this.modelFor('deployment').get('discovered_host');
    return Ember.RSVP.hash({
      discovered_host,
      maxResources: this.loadMaxResources(deployment)
    });

    Ember.RSVP.hash()
  },

  deactivate() {
    return this.send('saveDeployment', null);
  }

});
