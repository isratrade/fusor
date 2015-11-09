import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['row'],

  actions: {
    openCancelDeploymentModal() {
      return Ember.$('#cancelDeploymentModal').modal('show');
    },

    saveAndCancelDeployment() {
      this.get('targetObject').send('saveAndCancelDeployment');
      return Ember.$('#cancelDeploymentModal').modal('hide');
    },

    cancelAndDeleteDeployment() {
      this.get('targetObject').send('cancelAndDeleteDeployment');
      return Ember.$('#cancelDeploymentModal').modal('hide');
    }
  }

});
