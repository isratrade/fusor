import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['search', 'page', 'sort_by', 'dir', ],

  sortByDirection: Ember.computed('dir', function() {
    if (this.get('dir') === 'DESC') {
      return 'ASC';
    } else {
      return 'DESC';
    }
  }),

  isFiltered: Ember.computed.notEmpty('search'),

  filteredDeployments: Ember.computed('model', 'search', 'model.[]', function(){
    var search = this.get('search');
    var rx = new RegExp(search, 'gi');
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
  })

});
