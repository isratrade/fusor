import Ember from 'ember';

export default Ember.Component.extend({

  // classNameBindings: ['hasValidationError:hasError'],

  // hasValidationError: function () {
  //   return this.get('hasError');
  // }.property('hasError'),

  labelClassSize: function () {
    return this.getWithDefault('labelSize', 'col-md-2');
  }.property(),

  inputClassSize: function () {
    return this.getWithDefault('inputSize', 'col-md-4');
  }.property(),

  showUnits: function() {
    return Ember.isBlank(this.get('unitsLabel'));
  }.property('unitsLabel'),

  unitsClassSize: function () {
    return this.getWithDefault('unitsSize', 'col-md-2');
  }.property(),

});
