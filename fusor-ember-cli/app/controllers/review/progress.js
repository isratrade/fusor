import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['deployment', 'review'],

  isRhevOpen: true,
  isOpenStackOpen: false,
  isCloudFormsOpen: false,
  isSubscriptionsOpen: false,
  foremanTasksURL: null,

  showErrorMessage: false,
  errorMsg: null, // this should be overwritten by API response

  isFinished: Ember.computed.alias("controllers.review.isFinished"),

});
