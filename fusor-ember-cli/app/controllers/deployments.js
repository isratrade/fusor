import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['perPage', 'startingPage', 'sort_by', 'dir', 'sort_by2', 'dir2'],
  perPage: 20,
  startingPage: 1,

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
    'sort_by2', 'dir2', 'sort_by', 'dir', function() {
    if (this.get('isFullyLoaded')) {
      return this.get('clientSideSortedDeployments');
    } else {
      return this.get('model');
    }
  }),

  searchDeploymentString: '',

  filteredDeployments: Ember.computed('modelResults', 'searchDeploymentString', 'model.[]', function(){
    var searchDeploymentString = this.get('searchDeploymentString');
    var rx = new RegExp(searchDeploymentString, 'gi');
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
  }),

  isFiltered: Ember.computed('searchDeploymentString', function () {
    return Ember.isPresent(this.get('searchDeploymentString'));
  }),

  actions: {
    loadAll() {
      return this.set('per_page', 10000);
    }
  }

});
