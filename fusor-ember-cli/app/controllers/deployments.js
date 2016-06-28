import Ember from 'ember';

export default Ember.Controller.extend({

  // queryParams: ['order'],

  // sortByColumn: Ember.computed('order', function() {
  //   if (Ember.isPresent(this.get('order'))) {
  //     console.log(this.get('order').split('+')[0]);
  //     return this.get('order').split('+')[0];
  //   } else {
  //     console.log('name');
  //     return 'name';
  //   }

  // }),

  // sortByDirection: Ember.computed('order', function() {
  //   if (Ember.isPresent(this.get('order'))) {
  //     let dir = this.get('order').split('+')[1];
  //     if (dir === 'DESC') {
  //       return 'ASC';
  //     } else {
  //       return 'DESC';
  //     }
  //   } else {
  //     return 'ASC';
  //   }
  // }),

  order: Ember.computed('sortByColumn', 'sortByDirection', function() {
    return [this.get('sortByColumn')+':'+this.get('oppositeSortByDirection')];
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
