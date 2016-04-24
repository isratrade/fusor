import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelAdapter.extend({

    urlForQuery(query, modelName) {
        // Use consumer UUID to get pools
        // GET /api/customer_portal/pools?consumer=' + consumerUUID + '&listall=false');
        return "/api/customer_portal/pools?consumer=" + query["uuid"] + "&listall=false";
    }

});
