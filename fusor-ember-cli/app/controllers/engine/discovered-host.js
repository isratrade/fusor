import Ember from 'ember';
import NeedsDeploymentMixin from "../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

  queryParams: ['search', 'page', 'sort_by', 'dir'],

  rhevController: Ember.inject.controller('rhev'),

  selectedRhevEngineHost: Ember.computed.alias("model"),
  rhevIsSelfHosted: Ember.computed.alias("deploymentController.model.rhev_is_self_hosted"),

  hypervisorModelIds: Ember.computed('deploymentController.model.discovered_hosts.[]', function() {
    return this.get('deploymentController.model.discovered_hosts').getEach('id');
  }),

  engineNextRouteName: Ember.computed('rhevIsSelfHosted', function() {
    if (this.get('rhevIsSelfHosted')) {
      return 'rhev-options';
    } else {
      return 'hypervisor.discovered-host';
    }
  }),

  // Filter out hosts selected as Hypervisor
  availableHosts: Ember.computed('allDiscoveredHosts.[]', 'hypervisorModelIds.[]', function() {
    // TODO: Ember.computed.filter() caused problems. error item.get is not a function
    var self = this;
    var allDiscoveredHosts = this.get('allDiscoveredHosts');
    if (this.get('allDiscoveredHosts')) {
      return allDiscoveredHosts.filter(function(item) {
        if (self.get('hypervisorModelIds')) {
          return !(self.get('hypervisorModelIds').contains(item.get('id')));
        }
      });
    }
  }),

  filteredHosts: Ember.computed('availableHosts.[]', 'search', 'isStarted', function(){
    var search = this.get('search');
    var rx = new RegExp(search, 'gi');
    var availableHosts = this.get('availableHosts');

    if (this.get('isStarted')) {
      return Ember.A([this.get('model')]);
    } else if (availableHosts.get('length') > 0) {
      return availableHosts.filter(function(record) {
        return (record.get('name').match(rx) || record.get('memory_human_size').match(rx) ||
                record.get('disks_human_size').match(rx) || record.get('subnet_to_s').match(rx) ||
                record.get('mac').match(rx)
               );
      });
    } else {
      return availableHosts;
    }
  }),

  numSelected: Ember.computed('model.id', function() {
    return (this.get('model.id')) ? 1 : 0;
  }),

  isSelectedEngineHostnameInvalid: false,

  disableNextOnEngine: Ember.computed(
    'isSelectedEngineHostnameInvalid',
    'deploymentController.hasNoEngine',
    function() {
      return this.get('deploymentController.hasNoEngine') ||
        this.get('isSelectedEngineHostnameInvalid');
    }
  ),

  prevPage: Ember.computed('pageNumber', function() {
    return parseInt(this.get('pageNumber')) - 1;
  }),

  nextPage: Ember.computed('nextPage', function() {
    return parseInt(this.get('pageNumber')) + 1;
  }),

  disablePrevPage: Ember.computed('pageNumber', function() {
    return parseInt(this.get('pageNumber')) === 1 || Ember.isBlank(this.get('pageNumber'));
  }),

  disableNextPage: Ember.computed('pageNumber', 'totalPages', function() {
    return parseInt(this.get('pageNumber')) === parseInt(this.get('totalPages'));
  }),

  entriesFrom: Ember.computed('pageNumber', 'totalPages', 'totalDiscoveredHosts', function() {
    return ((parseInt(this.get('pageNumber')) * 20) - 19);
  }),

  entriesTo: Ember.computed('pageNumber', 'totalPages', 'totalDiscoveredHosts', function() {
    if (parseInt(this.get('pageNumber')) === parseInt(this.get('totalPages'))) {
      return this.get('totalDiscoveredHosts');
    } else {
      return (parseInt(this.get('pageNumber')) * 20);
    }
  }),

  showPagination: Ember.computed('totalPages', function() {
    return (parseInt(this.get('totalPages')) > 1);
  }),

  displayingEntries: Ember.computed('totalDiscoveredHosts', 'totalPages', 'entriesFrom', 'entriesTo', function() {
    if (parseInt(this.get('totalDiscoveredHosts') === 0)) {
      return 'No entries found';
    } else if (parseInt(this.get('totalPages')) < 2) {
      return `Displaying <strong>all ${this.get('totalDiscoveredHosts')}</strong> entries`.htmlSafe();
    } else {
      return `Displaying entries <strong>${this.get('entriesFrom')} - ${this.get('entriesTo')}</strong> of <strong>${this.get('totalDiscoveredHosts')}</strong> in total`.htmlSafe();
    }
  }),

  actions: {
    onEngineChanged(newlySelectedHost, isInvalidHostname) {
      this.set('isSelectedEngineHostnameInvalid', isInvalidHostname);
      this.set('deploymentController.model.discovered_host.discovered_host', newlySelectedHost);
    },
    setIfHostnameInvalid(bool, hostId) {
      let discoveredHost = this.get('deploymentController.model.discovered_host');
      if(discoveredHost && discoveredHost.get('id') === hostId) {
        this.set('isSelectedEngineHostnameInvalid', bool);
      }
    }
  }
});
