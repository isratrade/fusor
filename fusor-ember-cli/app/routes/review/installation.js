import Ember from 'ember';
import request from 'ic-ajax';
import NeedsExistingManifestHelpers from '../../mixins/needs-existing-manifest-helpers';

export default Ember.Route.extend(NeedsExistingManifestHelpers, {

  beforeModel() {
    // Ensure the models have been persisted so that we're validating/syncing up to date data.
    let deployment = this.modelFor('deployment');

    if (deployment.get('isStarted')) {
      return;
    }

    let promises = {
      deployment: deployment.save()
    };

    if (deployment.get('deploy_openstack')) {
      promises.openstack_deployment = deployment.get('openstack_deployment')
        .then(openstack_deployment => openstack_deployment.save());
    }

    return Ember.RSVP.hash(promises);
  },

  model() {
    const reviewModel = this.modelFor('review');
    const subModel = this.modelFor('subscriptions');
    let modelHash = {reviewModel};
    if(subModel) {
      // Use subscriptions model if the loading has already been done
      modelHash.useExistingManifest = subModel.useExistingManifest;
      if(subModel.subscriptions) {
        modelHash.subscriptions = subModel.subscriptions;
      }
      return modelHash;
    } else {
      // subscriptions model isn't available, maybe because of a page refresh
      // Need to load this data independently
      return this.shouldUseExistingManifest().then(useExistingManifest => {
        modelHash.useExistingManifest = useExistingManifest;

        if(useExistingManifest) {
          modelHash.subscriptions = this.loadSubscriptions();
        }

        return Ember.RSVP.hash(modelHash);
      });
    }
  },

  setupController(controller, modelHash) {
    const model = modelHash.reviewModel;
    controller.set('model', model);
    controller.set('showErrorMessage', false);
    controller.set('useExistingManifest', modelHash.useExistingManifest);
    if (model.get('deploy_rhev')) {
      this.store.findAll('hostgroup').then(function(results) {
        var fusorBaseHostgroup = results.filterBy('name', 'Fusor Base').get('firstObject');
        var fusorBaseDomain = fusorBaseHostgroup.get('domain.name');
        controller.set('engineDomain', fusorBaseDomain);
        controller.set('hypervisorDomain', fusorBaseDomain);
      });
    }

    const subModel = this.controllerFor('subscriptions');
    if(modelHash.useExistingManifest) {
      controller.set('useExistingManifest', true);
      controller.set('reviewSubscriptions', modelHash.subscriptions);
    } else if (model.get('is_disconnected')) {
      controller.set('reviewSubscriptions', this.modelFor('subscriptions/review-subscriptions'));
    } else {
      var reviewSubscriptions = model.get('subscriptions').filter(function(sub) {
        return (sub.get('source') == 'added');
      });
      var hasSubs = reviewSubscriptions.reduce((prev, sub) => {
        return prev || sub.get('quantity_to_add') > 0;
      }, false); // initial val
      controller.set('reviewSubscriptions', reviewSubscriptions);
      controller.set('hasSubscriptionsToAttach', hasSubs);
      controller.set('hasSessionPortal', subModel ? subModel.sessionPortal : null);
      controller.set('hasSubscriptionPools', Ember.isPresent(this.controllerFor('subscriptions/select-subscriptions').get('subscriptionPools')));
    }

    controller.set('validationErrors', []);
    controller.set('validationWarnings', []);
    let self = this;

    if (!model.get('isStarted')) {
      // the PUT request from saveDeployment was firing too late and the server was syncing/validating stale data.
      // the model.save ensures the server has the most recent version of deployment before proceeding.
      controller.set('showSpinner', true);
      this.validate().then(function () {
        return self.validateDiscoveredHostsPoweredOn().then(function () {
            return self.syncOpenStack();
        });
      })
      .catch(error => {
        console.log('error', error);
        controller.set('errorMsg', error.jqXHR.responseText);
        controller.set('showErrorMessage', true);
      });
    }
  },

  validate() {
    let controller = this.get('controller');
    let deploymentId = this.get('controller.model.id');
    let token = Ember.$('meta[name="csrf-token"]').attr('content');
    let validationErrors = controller.get('validationErrors');

    controller.set('spinnerTextMessage', "Validating deployment...");

    return request({
      url: `/fusor/api/v21/deployments/${deploymentId}/validate`,
      type: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": token
      },
      data: {}
    }).then(response => {
       if (Ember.isPresent(response.validation)) {
         controller.set('validationErrors', response.validation.errors);
         controller.set('validationWarnings', response.validation.warnings);
       }
       console.log('validate() was successful');
       return Ember.RSVP.Promise.resolve('validate() was successful');
    })
  },

  validateDiscoveredHostsPoweredOn() {
    let controller = this.get('controller');
    let deployment = this.get('controller.model');
    let token = Ember.$('meta[name="csrf-token"]').attr('content');
    if (!deployment.get('deploy_rhev') || Ember.isPresent(controller.get('validationErrors'))) {
      return Ember.RSVP.Promise.resolve('all discovered hosts are powered on');
    }

    return deployment.get('discovered_hosts').then(function(results) {
      var discoveredHostIds = results.getEach('id');
      discoveredHostIds.push(deployment.get('rhev_engine_host_id'));
      controller.set('showSpinner', true);
      controller.set('spinnerTextMessage', "Ensuring discovered hosts are powered on...");
      discoveredHostIds.forEach(function (hostId) {
        request({
          url: `/api/v2/discovered_hosts/${hostId}/refresh_facts`,
          type: "PUT",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRF-Token": token
          },
          data: {}
        }).then(function () {
          console.log('validateDiscoveredHostsPoweredOn() was successful');
          return Ember.RSVP.Promise.resolve('validateDiscoveredHostsPoweredOn() was successful');
        }).catch(error => {
            controller.set('showSpinner', false);
            controller.set('errorMsg', 'Discovered host id ' + hostId + ' selected for RHEV deployment is turned off');
            controller.set('showErrorMessage', true);
        });
      });
    });
  },

  syncOpenStack() {
    let controller = this.get('controller');
    let deployment = this.get('controller.model');
    let openstack_deployment = this.get('controller.model.openstack_deployment');
    let token = Ember.$('meta[name="csrf-token"]').attr('content');

    if (!deployment.get('deploy_openstack') || !openstack_deployment || Ember.isPresent(controller.get('validationErrors'))) {
      return Ember.RSVP.Promise.resolve('no OpenStack sync needed');
    }

    controller.set('spinnerTextMessage', "Syncing OpenStack...");

    return request({
      url: `/fusor/api/v21/openstack_deployments/${openstack_deployment.get('id')}/sync_openstack`,
      type: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": token
      }
    });
  }
});
