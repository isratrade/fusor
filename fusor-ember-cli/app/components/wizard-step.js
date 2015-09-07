import Ember from 'ember';

export default Ember.Component.extend({

  resizeWizard: function() {
    var self = this;
    this.resizeHandler = function() {
            // Rob's jquery code for resizing in
            // https://github.com/patternfly/rcue-rdom/blob/master/html/assign-roles-rhci.html
            var documentHeight = 0;
            var navbarpfHeight = 0;
            var pageheaderrhciHeight = 0;
            var rowHeight = 0;
            if (Ember.$('.sidebar-pf').length > 0 && matchMedia('only screen and (min-width: 768px)').matches) {
              documentHeight = Ember.$(document).height();
              navbarpfHeight = Ember.$('.navbar-pf').outerHeight();
              pageheaderrhciHeight = Ember.$('.page-header-rhci').outerHeight();
              rowHeight = documentHeight - navbarpfHeight - pageheaderrhciHeight;
            }
            // set height of attribute in controller
            return self.set('minHeight', rowHeight);
    }.bind(this);

    Ember.$(window).on('resize', this.resizeHandler);
    this.resizeHandler();

  }.on('didInsertElement'),

  removeResize: function() {
    Ember.$(window).off('resize', this.resizeHandler);
  }.on('willDestroyElement')

});
