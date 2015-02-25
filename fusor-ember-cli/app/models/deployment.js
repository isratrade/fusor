import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  organization_id: DS.attr('string'),
  environment_id: DS.attr('string'),
});
