import Ember from 'ember';

export default Ember.ObjectController.extend({
  applicationModes: ['a', 'b', 'c'],
  modeLetter: 'b',

  actions: {
    showMyfriend: function() {
      alert(this.get('modeLetter'));
    }
  }

});
