import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  isNewSerializerAPI: true,
  attrs: {
    humanized: { embedded: 'always' }
  }
});
