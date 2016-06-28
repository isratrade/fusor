import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sort_by', 'dir', 'search', 'perPage', 'startingPage'],
  startingPage: 1,
  perPage: 20,

  sortByDirection: Ember.computed('dir', function() {
    if (this.get('dir') === 'DESC') {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }),

  clientSideSortOrder: Ember.computed('sort_by', 'dir', function() {
    return [this.get('sort_by')+':'+this.get('dir')];
  }),

  clientSideSortedDeployments: Ember.computed.sort('model', 'clientSideSortOrder'),

  modelResults: Ember.computed('isFullyLoaded', 'clientSideSortedDeployments', 'model', function() {
    if (this.get('isFullyLoaded')) {
      return this.get('clientSideSortedDeployments');
    } else {
      return this.get('model');
    }
  }),

  isFiltered: Ember.computed.notEmpty('search'),
  showLoader: Ember.computed.not('isFiltered'),

  filteredDeployments: Ember.computed('modelResults', 'search', 'model.[]', function(){
    var search = this.get('search');
    var rx = new RegExp(search, 'gi');
    var modelResults = this.get('modelResults');

    if (modelResults.get('length') > 1) {
      return modelResults.filter(function(record) {
        if (Ember.isPresent(record.get('name'))) {
          return record.get('name').match(rx);
        }
      });
    } else {
      return modelResults;
    }
  })

});
