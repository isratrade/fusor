import Ember from 'ember';

export default Ember.Mixin.create({

  needs: ['application', 'subscriptions',
          'configure-organization', 'configure-environment',
          'subscriptions/select-subscriptions'],

  isRhev: Ember.computed.alias("model.deploy_rhev"),
  isOpenStack: Ember.computed.alias("model.deploy_openstack"),
  isCloudForms: Ember.computed.alias("model.deploy_cfme"),
  isOpenShift: Ember.computed.alias("model.deploy_openshift"),

  // default is downstream
  isUpstream: false,
  hideSubscriptions: false,
  isSubscriptions: function () {
    return (!(this.get('hideSubscriptions') && !(this.get('isUpstream'))));
  }.property('isUpstream', 'hideSubscriptions'),

  // will be overwritten be routes
  isHideWizard: null,

  // declared in controllers, and not in mixin
  // isRhev
  // isOpenStack
  // isCloudForms

  // route names will be overwrriten by active hook in routes/deployment.js
  // and routes/deployment-new.js and routes/start.js and routes/deployment-new/start.js
  satelliteTabRouteName: null,
  organizationTabRouteName: null,
  lifecycleEnvironmentTabRouteName: null,

  disableNextOnStart: function () {
    return (!(this.get('isRhev') || this.get('isOpenStack') || this.get('isCloudForms') || this.get('isOpenShift')));
  }.property('isRhev', 'isOpenStack', 'isCloudForms', 'isOpenShift'),

  // names
  nameRHCI: function() {
    if (this.get('isUpstream')) { return "Fusor"; } else { return "RHCI"; }
  }.property('isUpstream'),

  nameRedHat: function() {
    if (this.get('isUpstream')) { return ""; } else { return "Red Hat"; }
  }.property('isUpstream'),

  nameSatellite: function() {
    if (this.get('isUpstream')) { return "Foreman"; } else { return "Satellite"; }
  }.property('isUpstream'),

  nameRhev: function() {
    if (this.get('isUpstream')) { return "oVirt"; } else { return "RHEV"; }
  }.property('isUpstream'),

  nameOpenStack: function() {
    if (this.get('isUpstream')) { return "RDO"; } else { return "RHELOSP"; }
  }.property('isUpstream'),

  nameCloudForms: function() {
    if (this.get('isUpstream')) { return "ManageIQ"; } else { return "CloudForms"; }
  }.property('isUpstream'),

  nameOpenShift: function() {
    return "OpenShift";
  }.property(),

  fullnameRhev: function() {
    if (this.get('isUpstream')) { return "oVirt Project"; } else { return "Red Hat Enterprise Virtualization"; }
  }.property('isUpstream'),

  fullnameOpenStack: function() {
    if (this.get('isUpstream')) { return "RDO Project"; } else { return "Red Hat Enterprise Linux OpenStack Platform"; }
  }.property('isUpstream'),

  fullnameCloudForms: function() {
    if (this.get('isUpstream')) { return "ManageIQ"; } else { return "Red Hat Cloud Forms Management Engine"; }
  }.property('isUpstream'),

  fullnameOpenShift: function() {
    return "Red Hat Cloud OpenShift";
  }.property(),

  // logo
  logoPath: function() {
    if (this.get('isUpstream')) { return "assets/foreman.png"; } else { return "assets/Header-logotype.png"; }
  }.property('isUpstream'),

  currentStepNumber: null, //set by setupController,

  numberProducts: function() {
    var rhev = this.get('isRhev') ? 1 : 0
    var osp = this.get('isOpenStack') ? 1 : 0
    var cfme = this.get('isCloudForms') ? 1 : 0
    var osh = this.get('isOpenShift') ? 1 : 0
    return rhev + osp + cfme + osh;
  }.property('isRhev', 'isOpenStack', 'isCloudForms', 'isOpenShift'),

  // steps
  stepNumberRhev: function() {
    if (this.get('isRhev')) {
      return 2;
    }
  }.property('isRhev'),

  stepNumberOpenstack: function() {
    if (this.get('isOpenStack')) {
      if (this.get('stepNumberRhev')) {
        return this.get('stepNumberRhev') + 1;
      } else {
        return 2;
      }
    }
  }.property('stepNumberRhev', 'isOpenStack'),

  stepNumberOpenShift: function() {
    if (this.get('isOpenShift')) {
      if (this.get('stepNumberOpenstack')) {
        return this.get('stepNumberOpenstack') + 1;
      } else if (this.get('stepNumberRhev')) {
        return this.get('stepNumberRhev') + 1;
      } else {
        return 2;
      }
    }
  }.property('stepNumberOpenstack', 'isOpenShift'),

  stepNumberCloudForms: function() {
    if (this.get('isCloudForms')) {
      if (this.get('stepNumberOpenShift')) {
        return this.get('stepNumberOpenShift') + 1;
      } else if (this.get('stepNumberOpenstack')) {
        return this.get('stepNumberOpenstack') + 1;
      } else if (this.get('stepNumberRhev')) {
        return this.get('stepNumberRhev') + 1;
      } else {
        return 2;
      }
    }
  }.property('stepNumberOpenShift', 'isCloudForms'),

  stepNumberSubscriptions: function() {
    if (this.get('isSubscriptions')) {
      return (this.get('numberProducts') + 2);
    }
  }.property('numberProducts', 'isSubscriptions'),

  // calculate temporary without isSubscriptions
  stepNumberReviewTemp: function() {
    if (this.get('isSubscriptions')) {
      return (this.get('numberProducts') + 3);
    } else {
      return (this.get('numberProducts') + 2);
    }
  }.property('numberProducts', 'isSubscriptions'),

  stepNumberReview: function() {
    if (this.get('isSubscriptions')) {
      return this.get('stepNumberReviewTemp');
    } else {
      return (this.get('stepNumberReviewTemp') - 1);
    }
  }.property('stepNumberReviewTemp', 'isSubscriptions'),

  step2RouteName: function() {
    if (this.get('isRhev')) {
      return 'rhev';
    } else if (this.get('isOpenStack')) {
      return 'openstack';
    } else if (this.get('isCloudForms')) {
      return 'cloudforms';
    }
  }.property('isRhev', 'isOpenStack', 'isCloudForms'),

  step3RouteName: function() {
    if (this.get('step2RouteName') === 'rhev') {
      if (this.get('isOpenStack')) {
        return 'openstack';
      } else if (this.get('isCloudForms')) {
        return 'cloudforms';
      } else if (this.get('isSubscriptions')) {
        return 'subscriptions';
      } else {
        return 'review';
      }
    } else if (this.get('step2RouteName') === 'openstack') {
      if (this.get('isCloudForms')) {
        return 'cloudforms';
      } else if (this.get('isSubscriptions')) {
        return 'subscriptions';
      } else {
        return 'review';
      }
    } else if (this.get('step2RouteName') === 'cloudforms') {
      if (this.get('isSubscriptions')) {
        return 'subscriptions';
      } else {
        return 'review';
      }
    }
  }.property('step2RouteName', 'isOpenStack', 'isCloudForms', 'isSubscriptions')

});
