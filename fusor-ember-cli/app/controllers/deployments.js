import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['perPage', 'startingPage', 'sort_by', 'dir'],
  perPage: 20,
  startingPage: 1,

  sortBy: Ember.computed('sort_by', function() {
    return this.getWithDefault('sort_by', 'name');
  }),
  directionBy: Ember.computed('dir', function() {
    return this.getWithDefault('dir', 'ASC');
  }),
  sortByDirection: Ember.computed('dir', function() {
    if (this.get('dir') === 'DESC') {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }),

  // sortedDeployments: Ember.computed.sort('model', 'sortOrder'),

  searchDeploymentString: '',

  filteredDeployments: Ember.computed('model', 'searchDeploymentString', 'model.[]', function(){
    var searchDeploymentString = this.get('searchDeploymentString');
    var rx = new RegExp(searchDeploymentString, 'gi');
    var model = this.get('model');

    if (model.get('length') > 1) {
      return model.filter(function(record) {
        if (Ember.isPresent(record.get('name'))) {
          return record.get('name').match(rx);
        }
      });
    } else {
      return model;
    }
  }),

  isFiltered: Ember.computed('searchDeploymentString', function () {
    return Ember.isPresent(this.get('searchDeploymentString'));
  })

});
