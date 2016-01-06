import Ember from 'ember';

export default Ember.Component.extend({

  title: Ember.computed('deployment.name', function() {
      return "Edit Deployment Role - " + this.get('role.name');
  }),

  actions: {
    deleteDeployment() {
      this.set('openModal', false);
      this.sendAction('deleteDeployment', this.get('deployment'));
    },

    cancelModal() {
      this.set('openModal', false);
    }
  }

});
