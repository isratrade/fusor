import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sort_by', 'dir', 'sort_by2', 'dir2', 'perPage', 'startingPage', 'search'],
  startingPage: 1,

  isFiltered: Ember.computed('search', function () {
    return Ember.isPresent(this.get('search'));
  }),

  perPage: Ember.computed('isFiltered', function() {
    // alert(this.get('isFiltered'));
    // if (this.get('isFiltered')) {
      return 10000;
    // } else {
    //   return 20;
    // }
  }),

  sortByDirection: Ember.computed('dir', function() {
    if (this.get('dir') === 'DESC') {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }),

  sortByDirection2: Ember.computed('dir2', function() {
    if (this.get('dir2') === 'DESC') {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }),

  clientSideSortOrder: Ember.computed('sort_by2', 'dir2', function() {
    return [this.get('sort_by2')+':'+this.get('dir2')];
  }),

  clientSideSortedDeployments: Ember.computed.sort('model', 'clientSideSortOrder'),

  modelResults: Ember.computed('isFullyLoaded', 'clientSideSortedDeployments', 'model',
    'sort_by2', 'dir2', 'sort_by', 'dir', 'search', function() {
    if (this.get('isFullyLoaded')) {
      return this.get('clientSideSortedDeployments');
    } else {
      return this.get('model');
    }
  }),

  modelResultsText: Ember.computed('isFullyLoaded', 'clientSideSortedDeployments', 'model',
    'sort_by2', 'dir2', 'sort_by', 'dir', 'search', function() {
    if (this.get('isFullyLoaded')) {
      return 'clientSideSortedDeployments';
    } else {
      return 'model';
    }
  }),

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
