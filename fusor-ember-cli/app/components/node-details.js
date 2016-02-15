import Ember from 'ember';

export default Ember.Component.extend({

  numNodeNodes: Ember.computed('numNodes', function() {
    return this.get('numNodes') -1 ;
  }),

});
