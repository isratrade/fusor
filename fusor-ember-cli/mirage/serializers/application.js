import { JSONAPISerializer } from 'ember-cli-mirage';
const { underscore } = Ember.String;

export default JSONAPISerializer.extend({

  keyForAttribute(attr) {
    return underscore(attr);
  },

  keyForRelationship(relationship) {
    return underscore(relationship);
  },

  keyForRelationshipIds(relationship) {
    return underscore(relationship) + '_ids';
  }

  // keyForModel(modelName) {
  //   return underscore(modelName);
  // },

  // keyForCollection(modelName) {
  //   return pluralize(underscore(modelName));
  // },

});
