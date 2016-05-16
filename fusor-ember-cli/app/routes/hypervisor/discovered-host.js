import Ember from 'ember';
import DiscoveredHostRouteMixin from '../../mixins/discovered-host-route-mixin';
import NeedsDiscoveredHostsAjax from '../../mixins/needs-discovered-hosts-ajax';

export default Ember.Route.extend(DiscoveredHostRouteMixin, NeedsDiscoveredHostsAjax, {
  model() {
    return this.modelFor('deployment').get('discovered_hosts');
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.set('saveOnTransition', true);
  },

  actions: {
    willTransition(transition) {
      if (!this.get('saveOnTransition')) {
        return true;
      }

      let deployment = this.modelFor('deployment');
      let hypervisorModelIds = this.controllerFor('hypervisor/discovered-host').get('hypervisorModelIds');

      this.set('saveOnTransition', false);
      transition.abort();
      this.postDiscoveredHostIds(deployment, hypervisorModelIds).catch(err => {
        console.log(err);
      }).finally(() => {
        transition.retry();
      });
    },

    saveHyperVisors(redirectPath) {
      var self = this;
      var deployment = this.modelFor('deployment');
      var hypervisorModelIds = this.controllerFor('hypervisor/discovered-host').get('hypervisorModelIds');
      var token = Ember.$('meta[name="csrf-token"]').attr('content');
      request({
        url: '/fusor/api/v21/deployments/' + deployment.get('id'),
        type: "PATCH",
        data: JSON.stringify({data: {attributes: { 'discovered_host_ids': hypervisorModelIds } } }),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": token,
          "Authorization": "Basic " + self.get('session.basicAuthToken')
        }
      }).then(function(response) {
        if (redirectPath) {
          self.transitionTo('rhev-options');
        }
      }, function(error) {
        console.log(error);
      });
    }
  }
});
