import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Mixin.create({

  tagName: 'tr',

  classNameBindings: ['bgColor', 'disabledTr'],

  bgColor: Ember.computed('isChecked', function () {
    if (this.get('isChecked')) {
      return 'white-on-blue';
    }
  }),

  disabledTr: Ember.computed('isHypervisorOrStarted', 'isEngineOrStarted', function() {
    if (this.get('isHypervisorOrStarted') || this.get('isEngineOrStarted')) {
      return 'disabled';
    }
  }),

  cssHostHostId: Ember.computed('host.id', function () {
    return ('host_' + this.get('host.id'));
  }),

  cssIdHostId: Ember.computed('host.id', function () {
    return ('select_rhev_id_' + this.get('host.id'));
  }),

  selectedIds: Ember.computed('model.[]', function () {
    if (this.get('model')) {
      return this.get('model').getEach("id");
    }
  }),

  isInvalidHostname: Ember.computed('host.name', function() {
    // HOST_REGEXP taken from Foreman code HOST_REGEXP in file /lib/net/validations.rb
    // But replaced /A with ^ and /z with $
    var hostname = this.get('host.name');
    var hostnameRegex = new RegExp(/^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$/);
    var invalidHostname = Ember.isEmpty(hostname) ||
      hostname.length > 45 ||
      Ember.isEmpty(hostname.match(hostnameRegex));

    this.sendAction('setIfHostnameInvalid', invalidHostname, this.get('host.id'));

    return invalidHostname;
  }),
  isValidHostname: Ember.computed.not('isInvalidHostname'),

  actions: {
    saveHostname() {
      var host = this.get('host');
      var self = this;
      var token = Ember.$('meta[name="csrf-token"]').attr('content');
      if (this.get('isValidHostname')) {
        request({
          url: '/fusor/api/v21/discovered_hosts/' + host.get('id') + '/rename',
          type: "PUT",
          data: JSON.stringify({'data': {'attributes': { 'name': host.get('name') } } }),
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-CSRF-Token": token,
            "Authorization": "Basic " + self.get('session.basicAuthToken')
          }
        }).then(function(response) {
          self.sendAction('setIfHostnameInvalid', false, host.get('id'));
        }, function(error) {
          console.log(error);
        });
      } else {
        this.sendAction('setIfHostnameInvalid', true, host.get('id'));
      }
    }
  }

});
