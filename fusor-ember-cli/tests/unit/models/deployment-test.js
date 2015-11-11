import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('deployment', 'Unit | Model | deployment', {
  // Specify the other units that are required for this test.
  needs: ['model:organization',
          'model:lifecycle-environment',
          'model:discovered-host',
          'model:subscription',
          'model:introspection-task',
          'model:foreman-task'
         ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('isStarted', function(assert){
  var model = this.subject();
  assert.equal(model.get('isStarted'), false);

  Ember.run(function() {
    model.set('foreman_task_uuid', 'any-arbitrary-uuid');
  });

  assert.equal(model.get('isStarted'), true);

  // Ember.run(function() {
  //   model.set('foreman_task_uuid', null);
  // });

  // assert.equal(model.get('isStarted'), false);
});
