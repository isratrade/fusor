/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Deployment number ${i}`; },
  deploy_rhev: true,
  deploy_openstack: false,
  deploy_cfme: true
});
