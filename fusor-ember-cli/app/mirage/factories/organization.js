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
  created_at: "2016-05-19T10:56:37.929+03:00",
  updated_at: "2016-05-19T10:56:37.929+03:00",
  ancestry: null,
  description: null

});
