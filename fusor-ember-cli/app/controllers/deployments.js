import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['order'],
  // sort: 'name',
  order: 'name+asc',

  // sortedDeployments: Ember.computed('model.[]', 'model.@each.name', 'order', function() {
  //   return this.get('model').sortBy(this.get('sort'), 'desc');
  // }),

  dirSort: Ember.computed('sort', 'order', function() {
    if (this.get('order') === 'desc') {
      return 'asc';
    } else {
      return 'desc';
    }
  }),

  sortOrder: Ember.computed('sort', 'dir', function() {
    return [this.get('sort')+':'+this.get('dir')];
  }),

  // sortedDeployments: Ember.computed.sort('model', 'sortOrder'),

  searchDeploymentString: '',

  filteredDeployments: Ember.computed('model', 'searchDeploymentString', 'model.[]', function(){
    var searchDeploymentString = this.get('searchDeploymentString');
    var rx = new RegExp(searchDeploymentString, 'gi');
    var model = this.get('model');

    if (sortedDeployments.get('length') > 1) {
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
