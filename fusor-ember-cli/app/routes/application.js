// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    invalidateSession: function () {
      return this.transitionTo('login');
    },

    notImplemented: function() {
      alert('This link is not implemented in the fusor-ember-cli prototype');
    },
    willImplement: function() {
      alert('Check back soon. This will be implemented soon.');
    },

    //Submit the modal
    submit: function() {
      Bootstrap.NM.push('Successfully submitted modal', 'success');
      return Bootstrap.ModalManager.hide('myModal');
    },

    //Cancel the modal, we don't need to hide the model manually because we set {..., dismiss: 'modal'} on the button meta data
    cancel: function() {
      return Bootstrap.NM.push('Modal was cancelled', 'info');
    },

    //Show the modal
    showModal: function(name) {
      return Bootstrap.ModalManager.show(name);
    },

    //Show the modal
    showRHCIModal: function() {
      return Bootstrap.ModalManager.show('newRHCI');
    },

  }
});
