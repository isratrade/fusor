import Ember from 'ember';

export default Ember.ArrayController.extend({

  // IS THIS USED
  showEntitlements: true,
  arrayQuantities: Ember.computed.mapBy('model', 'quantity'),
  totalQuantity: Ember.computed.sum('arrayQuantities')

});
