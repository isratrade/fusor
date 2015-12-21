import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  isNewSerializerAPI: true,
  attrs: {
     foreman_task: {key: 'foreman_task_uuid'}
  }
});
