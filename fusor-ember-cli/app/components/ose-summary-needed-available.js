import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',
  classNames: ['row'],

  percentProgress: Ember.computed('needed', 'available', function() {
    return this.get('needed') / this.get('available') * 100;
  }),

  percentProgressInt: Ember.computed('percentProgress', function() {
    return this.get('percentProgress').toFixed(0);
  }),

  styleWidth: Ember.computed('percentProgressInt', function () {
    return new Ember.Handlebars.SafeString(this.get('percentProgressInt') + '%');
  }),

  progressBarClass: Ember.computed('model.result', function() {
    var result = this.get('model.result');
    if (result === 'success') {
      return 'progress-bar progress-bar-success';
    } else if (result === 'error') {
      return 'progress-bar progress-bar-danger';
    } else if (result === 'warning') {
      return 'progress-bar progress-bar-warning';
    } else {
      return 'progress-bar';
    }
  }),

  deploymentStatus: Ember.computed('needed', function() {
    var needed = this.get('needed');
    if (needed) {
      if (needed === 100) {
        return 'Finished';
      } else {
        return 'In Process';
      }
    } else {
      return 'Waiting for content';
    }
  }),

  isSpin: Ember.computed('deploymentStatus', 'model.result', function() {
    return ((this.get('deploymentStatus') === 'In Process') && (this.get('model.result') === 'pending'));
  }),

  progressBarMsg: Ember.computed(
    'deploymentStatus',
    'model.result',
    'isFinished',
    'isSatelliteProgressBar',
    function() {
      if ((this.get('deploymentStatus') === 'In Process') && (this.get('model.result') === 'pending')) {
        if (this.get('isSatelliteProgressBar')) {
          return "Syncing content";
        } else if (this.get('isNodeProgressBar')) {
          return "Registering Node";
        } else {
          return "Installing components";
        }
      } else if (this.get('model.result') === 'error') {
        return "Error";
      } else if (this.get('model.result') === 'warning') {
        return "Warning";
      } else if (!this.get('isStarted')) {
        return "Waiting for content";
      } else if (this.get('isFinished')) {
        if (this.get('isSatelliteProgressBar')) {
          return "Sync content and setup successful";
        } else {
          if (this.get('isNodeProgressBar')) {
            return "Node registration successful";
          } else {
            return "Deployment successful";
          }
        }
      }
    }
  ),

  isFinished: Ember.computed('needed', function() {
    return (this.get('needed') === 100);
  }),

  isStarted: Ember.computed('needed', function() {
    return(this.get('needed') > 0);
  }),

  isError: Ember.computed('model.result', function() {
    return(this.get('model.result') === 'error');
  }),

  hasHumanizedErrors: Ember.computed('model.humanized_errors', function() {
    return (Ember.isPresent(this.get('model.humanized_errors')));
  }),

  hostErrorInfo: Ember.computed('model.humanized_errors', function() {
    var error = this.get('model.humanized_errors'),
      host = '';

    if (error.match(/Failed to provision/)) {
      host = error.match(/host '(.*)'\./)[1];

      return "Please check the host logs or <a href='/hosts/" + host +
          "/reports'>puppet reports</a>.";
    }
  })


});
