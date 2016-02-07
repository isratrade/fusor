import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['button-selection'],

  classNameBindings: ['buttonSelectionSelected'],

  buttonSelectionSelected: Ember.computed('value', 'groupValue', function() {
    return (this.get('value') === this.get('groupValue'));
  }),

  click() {
    return this.sendAction('changed', this.get('value'));
  }

});
