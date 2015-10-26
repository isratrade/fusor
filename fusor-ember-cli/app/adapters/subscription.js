import DS from 'ember-data';
import Ember from 'ember';
import FormDataAdapterMixin from 'ember-cli-form-data/mixins/form-data-adapter';

var token = Ember.$('meta[name="csrf-token"]').attr('content');
export default DS.ActiveModelAdapter.extend(FormDataAdapterMixin, {
    namespace: 'fusor/api/v21',
    headers: {
        "X-CSRF-Token": token
    },

});
