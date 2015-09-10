import Ember from 'ember';

export default Ember.Controller.extend({
  // IS THIS USED
  needs: ['deployment', 'hypervisor/discovered-host', 'engine/discovered-host']

});
