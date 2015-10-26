import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Controller.extend({

  needs: ['deployment'],

  upstreamConsumerUuid: Ember.computed.alias("controllers.deployment.model.upstream_consumer_uuid"),
  upstreamConsumerName: Ember.computed.alias("controllers.deployment.model.upstream_consumer_name"),
  cdnUrl: Ember.computed.alias("controllers.deployment.model.cdn_url"),
  manifestFile: Ember.computed.alias("controllers.deployment.model.manifest_file"),

  isRhev: Ember.computed.alias("controllers.deployment.model.deploy_rhev"),
  isOpenStack: Ember.computed.alias("controllers.deployment.model.deploy_openstack"),
  isCloudForms: Ember.computed.alias("controllers.deployment.model.deploy_cfme"),

  //overwritten by setupController
  organizationUpstreamConsumerUUID: null,
  organizationUpstreamConsumerName: null,

  validCredentials: function() {
    // password is not saved in the model
    return (Ember.isPresent(this.get('model.identification')) && Ember.isPresent(this.get('password')));
  }.property('model.identification', 'password'),

  enableCredentialsNext: function() {
    return this.get('validCredentials') || this.get('model.isAuthenticated');
  }.property('validCredentials', 'model.isAuthenticated'),
  disableCredentialsNext: Ember.computed.not('enableCredentialsNext'),

  hasUpstreamConsumerUuid: function() {
    return Ember.isPresent(this.get('upstreamConsumerUuid'));
  }.property('upstreamConsumerUuid'),

  hasOrganizationUpstreamConsumerUUID: function() {
    return Ember.isPresent(this.get('organizationUpstreamConsumerUUID'));
  }.property('organizationUpstreamConsumerUUID'),

  backRouteNameonCredentials: function() {
    if (this.get('isCloudForms')) {
      return 'cloudforms.cfme-configuration';
    } else if (this.get('isOpenStack')) {
      return 'assign-nodes';
    } else if (this.get('isRhev')) {
      return 'storage';
    } else {
      return 'configure-environment';
    }
  }.property('isRhev', 'isOpenStack', 'isCloudForms'),

  nextButtonTitle: 'Next',

  actionCredentialsNext: function() {
    if (this.get('model.isAuthenticated')) {
      return 'redirectToManagementApplication';
    } else {
      return 'loginPortal';
    }
  }.property('model.isAuthenticated'),

  isDisconnected: Ember.computed.alias('controllers.deployment.model.is_disconnected'),
  hasManifestFile: Ember.computed.notEmpty('manifestFile'),
  noManifestFile: Ember.computed.empty('manifestFile'),

  contentProviderType: function() {
    return (this.get('isDisconnected') ? "disconnected" : "redhat_cdn");
  }.property('isDisconnected'),

  contentProviderTitle: function() {
    return (this.get('isDisconnected') ? "Disconnected" : "Red Hat CDN");
  }.property('isDisconnected'),

  isDisconnectedSelected: function() {
    return (this.get('contentProviderType') === 'disconnected');
  }.property('contentProviderType'),

  actions: {
    providerTypeChanged: function() {
      return this.set('isDisconnected', this.get('isDisconnectedSelected'));
    },

    uploadManifest: function() {
      var file = document.getElementById('file-field').files[0];
      // this.get('controllers.deployment.model').set('attachment', file);
      var self = this;
      var params = {};
      var token = Ember.$('meta[name="csrf-token"]').attr('content');
      console.log('action: uploadManifest, PUT /fusor/api/v21/subscriptions/upload');
      //ic-ajax request
      request({
        url: '/fusor/api/v21/subscriptions/upload',
        type: 'PUT',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-CSRF-Token": token,
        },
        data: JSON.stringify({ 'parameters': params })
      }).then( function() {
            self.get('controllers.deployment.model').set('manifest_file', file.name);
            self.get('controllers.deployment.model').save().then(function () {
              return console.log('Manifest successfully uploaded');
            });
        }, function(error) {
              return console.log('ERROR on uploadManifest');
        }
      );

    },

    uploadDifferentManifest: function() {
      return this.set("manifestFile", null);
    }
  }


});
