/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) {
    return 'org ' + i;
  },
  title(i) {
    return 'org ' + i;
  },
  parent_id: null,
  parent_name: null,
  created_at: "2016-05-19",
  updated_at: "2016-05-19",
  ancestry: null,
  description: null

});
