import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['sort', 'dir'],
  sort: 'name',
  dir: 'desc',

  sortedDeployments: Ember.computed('model.[]', 'model.@each.name', 'sort', function() {
    return this.get('model').sortBy(this.get('sort'), 'desc');
  }),

  sortOrder: Ember.computed('sort', 'dir', function() {
    return [this.get('sort')+':'+this.get('dir')];
  }),

  sortedDeployments: Ember.computed.sort('model', 'sortOrder'),

  searchDeploymentString: '',

  filteredDeployments: Ember.computed('sortedDeployments', 'searchDeploymentString', 'model.[]', function(){
    var searchDeploymentString = this.get('searchDeploymentString');
    var rx = new RegExp(searchDeploymentString, 'gi');
    var sortedDeployments = this.get('sortedDeployments');

    if (sortedDeployments.get('length') > 1) {
      return sortedDeployments.filter(function(record) {
        if (Ember.isPresent(record.get('name'))) {
          return record.get('name').match(rx);
        }
      });
    } else {
      return sortedDeployments;
    }
  }),

  isFiltered: Ember.computed('searchDeploymentString', function () {
    return Ember.isPresent(this.get('searchDeploymentString'));
  })

});
