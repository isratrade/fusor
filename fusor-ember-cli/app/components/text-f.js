import Ember from 'ember';

export default Ember.Component.extend({

  typeInput: Ember.computed('type', function() {
    return (this.get('type') ? this.get('type') : 'text');
  }),

  validIsRequiredAndBlank: Ember.computed('value', 'isRequired', function() {
    return (this.get('isRequired') && Ember.isBlank(this.get('value')));
  }),

  isPassword: Ember.computed('type', function() {
    return (this.get('type') === 'password');
  }),

  isValid: Ember.computed('value', 'validator', 'errors.name', 'validIsRequiredAndBlank', function() {
    if (Ember.isPresent(this.get('errors.name')) || this.get('validIsRequiredAndBlank')) {
      return false;
    }

    let validator = this.get('validator');
    return validator ? validator.isValid(this.get('value')) : true;
  }),

  isInvalid: Ember.computed.not('isValid'),

  hasError: Ember.computed('showValidationError', 'errors.name', 'isInvalid', function () {
    return this.get('showValidationError') && this.get('isInvalid');
  }),

  validationMessages: Ember.computed('value', 'validator', 'validIsRequiredAndBlank', function() {
    if (this.get('validIsRequiredAndBlank')) {
      return ['cannot be blank'];
    }

    let validator = this.get('validator');
    return validator ? validator.getMessages(this.get('value')) : [];
  }),

  setOrigValue: Ember.on('didInsertElement', function() {
    this.set('origValue', this.get('value'));
  }),

  eyeIcon: 'fa-eye',
  isEyeOpen: true,

  actions: {
    showValidationErrors() {
      this.set("showValidationError", true);
    },

    showPassword() {
      this.set('isEyeOpen', this.toggleProperty('isEyeOpen'));
      if (this.get('isEyeOpen')) {
          this.set('typeInput', 'password');
          return this.set('eyeIcon', "fa-eye");
      } else {
          this.set('typeInput', 'text');
          return this.set('eyeIcon', "fa-eye-slash");
      }
    }
  }
});
