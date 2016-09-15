import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  // disable dasherize transformation
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return Ember.String.underscore(rawKey);
  }

});
