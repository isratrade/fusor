import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    registerNodes() {
      this.set('openModal', false);
      this.sendAction('registerNodes', this.get('edittedNodes'));
    },

    cancelRegisterNodes() {
      this.get('targetObject').set('edittedNodes', Ember.A());
      this.set('openModal', false);
    }

  }

});
