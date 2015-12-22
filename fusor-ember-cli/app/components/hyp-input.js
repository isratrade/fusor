import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteHyper(hyp) {
      return this.sendAction('action', hyp);
    }

  }

});
