import Ember from 'ember';
import NeedsDeploymentMixin from "../../../../mixins/needs-deployment-mixin";

export default Ember.Controller.extend(NeedsDeploymentMixin, {

//  queryParams: ['cuuid'],

 cuuid: Ember.computed.alias("controllers.deployment.upstream_consumer_uuid")

});
