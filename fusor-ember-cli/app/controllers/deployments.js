import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['search', 'page', 'sort_by', 'dir'],

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
  }),

  prevPage: Ember.computed('pageNumber', function() {
    return parseInt(this.get('pageNumber')) - 1;
  }),

  nextPage: Ember.computed('nextPage', function() {
    return parseInt(this.get('pageNumber')) + 1;
  }),

  disablePrevPage: Ember.computed('pageNumber', function() {
    return parseInt(this.get('pageNumber')) === 1 || Ember.isBlank(this.get('pageNumber'));
  }),

  disableNextPage: Ember.computed('pageNumber', 'totalPages', function() {
    return parseInt(this.get('pageNumber')) === parseInt(this.get('totalPages'));
  }),

  entriesFrom: Ember.computed('pageNumber', 'totalPages', 'totalDeployments', function() {
    return ((parseInt(this.get('pageNumber')) * 20) - 19);
  }),

  entriesTo: Ember.computed('pageNumber', 'totalPages', 'totalDeployments', function() {
    if (parseInt(this.get('pageNumber')) === parseInt(this.get('totalPages'))) {
      return this.get('totalDeployments');
    } else {
      return (parseInt(this.get('pageNumber')) * 20);
    }
  }),

  showPagination: Ember.computed('totalPages', function() {
    return (parseInt(this.get('totalPages')) > 1);
  }),

  displayingEntries: Ember.computed('totalDeployments', 'totalPages', 'entriesFrom', 'entriesTo', function() {
    if (parseInt(this.get('totalDeployments') === 0)) {
      return 'No entries found';
    } else if (parseInt(this.get('totalPages')) < 2) {
      return `Displaying <strong>all ${this.get('totalDeployments')}</strong> entries`.htmlSafe();
    } else {
      return `Displaying entries <strong>${this.get('entriesFrom')} - ${this.get('entriesTo')}</strong> of <strong>${this.get('totalDeployments')}</strong> in total`.htmlSafe();
    }
  })

});
