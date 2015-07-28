import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    // add root node 'entitlements' that customer protal JSON response doesn't return
    normalizeArrayResponse: function(store, type, payload) {
      payload = { pools: payload };
      return this._super(store, type, payload);
    },

    // remove attribute keys in the json response that aren't in the model management application
    normalizeHash: {
      management_applications: function(hash) {
        delete hash.releaseVer;
        delete hash.type;
        delete hash.owner;
        delete hash.installedProducts;
        delete hash.guestIds;
        delete hash.capabilities;
        return hash;
      }
    }

});
