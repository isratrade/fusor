import Ember from 'ember';

export default Ember.Component.extend({

  numNodeNodes: Ember.computed('numNodes', function() {
    return this.get('numNodes') -1 ;
  }),

  customEditLabel: "Custom Edit",
  isEditMode: false,
  customEditLabel: Ember.computed('isEditMode', function() {
    return this.get('isEditMode') ? "Finish Editing" : "Custom Edit";
  }),

  actions: {
    editOseNodeDetails() {
      this.toggleProperty('isEditMode');
    }
  }

});
