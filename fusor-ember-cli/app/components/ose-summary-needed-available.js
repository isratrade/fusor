import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['row'],

  percentProgress: Ember.computed('needed', 'available', function() {
    return parseInt(this.get('needed')) / parseInt(this.get('available')) * 100;
  }),

  percentProgressInt: Ember.computed('percentProgress', function() {
    var percentProgress = this.get('percentProgress') > 100 ? 100 : this.get('percentProgress')
    return parseInt(percentProgress);
  }),

  styleWidth: Ember.computed('percentProgressInt', function () {
    return new Ember.Handlebars.SafeString(this.get('percentProgressInt') + '%');
  }),

  progressBarClass: Ember.computed('percentProgressInt', function() {
    var percent = this.get('percentProgressInt');
    if (percent < 100) {
      return 'progress-bar progress-bar-gray';
    } else if (percent === 100) {
      return 'progress-bar progress-bar-black';
    } else if (percent > 100) {
      return 'progress-bar progress-bar-danger';
    } else {
      return 'progress-bar';
    }
  }),

  isOverCapacity: Ember.computed('percentProgressInt', function() {
    return (this.get('percentProgressInt') > 100);
  })

});
