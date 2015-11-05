/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name(i) { return `Org ${i}`; },
  owner_details: function() {
     return {"parentOwner": null,
             "id": "ff8080814f89882f014f898914c40001",
             "key": "Default_Organization",
             "displayName": "Default Organization",
             "contentPrefix": "/Default_Organization/$env",
             "defaultServiceLevel": null,
             "upstreamConsumer": null,
             "logLevel": null,
             "href": "/owners/Default_Organization",
             "created": "2015-09-01T15:31:46.500+0000",
             "updated": "2015-09-01T15:31:46.500+0000"
            };
  }

});
