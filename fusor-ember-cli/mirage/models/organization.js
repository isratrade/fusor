import { Model, hasMany, belongsTo} from 'ember-cli-mirage';

export default Model.extend({
  deployments: hasMany(),
  lifecycleEnvironments: hasMany()
});
