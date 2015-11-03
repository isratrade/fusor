import Ember from 'ember';

export default Ember.Component.extend({

  setIsDisabledCfme: function() {
    if (this.get('isRhev') || this.get('isOpenStack')) {
      this.set('isDisabledOpenShift', false);
      return this.set('isDisabledCfme', false);
    } else {
      this.set('isOpenShift', false);
      this.set('isCloudForms', false);
      this.set('isDisabledOpenShift', true);
      return this.set('isDisabledCfme', true);
    }
  }.observes('isRhev', 'isOpenStack'),

  isOpenShift: true,
  isDisabledOpenShift: false

});
