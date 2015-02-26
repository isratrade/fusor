import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['rhci', 'subscriptions', 'satellite/index', 'configure-environment', 'subscriptions/select-subscriptions'],

  isSatellite: Ember.computed.alias("controllers.rhci.isSatellite"),
  isRhev: Ember.computed.alias("controllers.rhci.isRhev"),
  isOpenStack: Ember.computed.alias("controllers.rhci.isOpenStack"),
  isCloudForms: Ember.computed.alias("controllers.rhci.isCloudForms"),

  nameRHCI: Ember.computed.alias("controllers.rhci.nameRHCI"),
  nameRhev: Ember.computed.alias("controllers.rhci.nameRhev"),
  nameOpenStack: Ember.computed.alias("controllers.rhci.nameOpenStack"),
  nameCloudForms: Ember.computed.alias("controllers.rhci.nameCloudForms"),
  nameSatellite: Ember.computed.alias("controllers.rhci.nameSatellite"),

  isDisabledRhev: Ember.computed.alias("controllers.configure-environment.disableAll"),

  isDisabledOpenstack: Ember.computed.alias("controllers.configure-environment.disableAll"),
  isDisabledCloudForms: Ember.computed.alias("controllers.configure-environment.disableAll"),
  isDisabledSubscriptions: Ember.computed.alias("controllers.configure-environment.disableAll"),
  isDisabledReview: Ember.computed.any("controllers.configure-environment.disableAll",
      "controllers.subscriptions/select-subscriptions.disableSubscriptionsNext"),

  stepNumberRhev: 2,

  stepNumberOpenstack: function() {
    if (this.get('isRhev')) {
      return '3';
    } else {
      return '2';
    }
  }.property('isRhev'),

  stepNumberCloudForms: function() {
    if (this.get('isRhev') && this.get('isOpenStack')) {
      return '4';
    } else if (this.get('isRhev') || this.get('isOpenStack'))  {
      return '3';
    } else {
      return '2';
    }
  }.property('isRhev', 'isOpenStack'),

  stepNumberSubscriptions: function() {
    if (this.get('isRhev') && this.get('isOpenStack') && this.get('isCloudForms')) {
      return '5';
    } else if ((this.get('isRhev') && this.get('isOpenStack')) || (this.get('isRhev') && this.get('isCloudForms')) ||  (this.get('isOpenStack') && this.get('isCloudForms')))  {
      return '4';
    } else if (this.get('isRhev') || this.get('isOpenStack') || this.get('isCloudForms')) {
      return '3';
    } else {
      return '2';
    }
  }.property('isRhev', 'isOpenStack', 'isCloudForms'),

  stepNumberReview: function() {
    if (this.get('isRhev') && this.get('isOpenStack') && this.get('isCloudForms')) {
      return '6';
    } else if ((this.get('isRhev') && this.get('isOpenStack')) || (this.get('isRhev') && this.get('isCloudForms')) ||  (this.get('isOpenStack') && this.get('isCloudForms')))  {
      return '5';
    } else if (this.get('isRhev') || this.get('isOpenStack') || this.get('isCloudForms')) {
      return '4';
    } else {
      return '3';
    }
  }.property('isRhev', 'isOpenStack', 'isCloudForms'),

});
