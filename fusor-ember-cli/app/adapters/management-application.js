import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({

    urlForQuery(query, modelName) {
        // Use owner key to get consumers (subscription application manangers)
        // GET /api/customer_portal/owners/#{OWNER['key']}/consumers?type=satellite
        return '/api/customer_portal/owners/' + query['owner_key'] + '/consumers?type=satellite';
    }

});
