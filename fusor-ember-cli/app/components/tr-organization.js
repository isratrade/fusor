import Ember from 'ember';

export default Ember.Component.extend({

  isChecked: function () {
    return (this.get('selectedOrganization') == this.get('org'));
  }.property('selectedOrganization', 'org'),

  // classNameBindings: ['bgColor', 'fontColor'],

  // bgColor: function () {
  //   if (this.get('isChecked')) {
  //     return 'blue';
  //   } else {
  //     return null;
  //   }
  // }.property('isChecked'),

  // fontColor: function () {
  //   if (this.get('isChecked')) {
  //     return 'fontwhite';
  //   } else {
  //     return null;
  //   }
  // }.property('isChecked'),

  actions: {
    organizationChanged: function(event) {
      this.sendAction('action', this.get('org'));
    }
  }

});
