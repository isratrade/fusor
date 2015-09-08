import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'fusor-ember-cli/tests/helpers/start-app';

var application;

module('Acceptance | deployments page', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('user should see all elements on deployments page', function(assert) {
  server.createList('deployment', 3);
  visit('/deployments');

  andThen(function() {
    assert.equal(currentURL(), '/deployments');
    assert.equal(find('h1').text(), 'Deployments');
    assert.equal($.trim(find('.new-deployment-button').text()), 'New Deployment');
    assert.equal($.trim(find('.form-group button').text()), 'Search');
    assert.equal($.trim(find('.filter-deployments input').attr('placeholder')), 'Filter ...');
    assert.ok(find('table.deployments-table').length);
    assert.equal($.trim(find('table.deployments-table > thead > tr > th:nth-child(1)').text()), 'Name');
    assert.equal($.trim(find('table.deployments-table > thead > tr > th:nth-child(2)').text()), 'Environment');
    assert.equal($.trim(find('table.deployments-table > thead > tr > th:nth-child(3)').text()), 'Organization');
    assert.equal($.trim(find('table.deployments-table > thead > tr > th:nth-child(4)').text()), 'Status');
    var displayingString = $.trim(find('.displaying-entries').text());
    assert.ok(new RegExp('Displaying').test(displayingString), 'Should show text Displaying ## of ## entries');
    // assert.ok(new RegExp('^displaying\s+\d+\s+of\s+\d+\s+entries$').test(displayingString), 'Should show text Displaying ## of ## entries');
    // assert.ok(new RegExp('^displaying\s\d').test('displaying'));
  });
});

test('user clicks on New Deployment button', function(assert) {
  server.createList('deployment', 3);
  visit('/deployments');
  click('.new-deployment-button a');

  andThen(function() {
    assert.equal(currentURL(), '/deployments/new/start');
  });
});

test('display rows of deployments', function(assert) {
  server.createList('deployment', 3);
  visit('/deployments');

  andThen(function() {
    var deployments = find('tr.deployment-row');
    assert.equal(deployments.length, 3);

    var deployment_name = find('tr.deployment-row:first-child > td:first-child > a');
    assert.equal($.trim(deployment_name.text()), 'Deployment number 0');
  });
});

test('user filters list of deployments', function(assert) {
  server.createList('deployment', 11);
  visit('/deployments');
  fillIn('input.filter-input', '1');

  andThen(function() {
    var deployments = find('tr.deployment-row');
    assert.equal(deployments.length, 2);  // Deployment Name 1 and 10
  });

  fillIn('input.filter-input', 'Deploy');

  andThen(function() {
    var deployments = find('tr.deployment-row');
    assert.equal(deployments.length, 11);
  });

});

//get error Assertion Failed: You have turned on testing mode, which disabled the run-loop's autorun. You will need to wrap any code with asynchronous side-effects in a run
// test('click edit button (last-child) for deployment on deployments page', function(assert) {
//   server.createList('deployment', 1);
//   visit('/deployments');
//   click('tr.deployment-row:first-child > td:last-child > a');

//   andThen(function() {
//     assert.equal(currentURL(), '/deployments/1/satellite');
//     // assert.equal($.trim(find('h1').text()), 'New RHCI Deployment: Deployment number 0');
//   });
// });

test('click deployment link (first-child) and verify edit deployment page ', function(assert) {
  var organization = server.create('organization');
  var lifecycle_environment = server.create('lifecycle_environment');
  server.createList('post', 10, {user_id: user.id});
  server.createList('deployment', 1);
  visit('/deployments');
  click('tr.deployment-row:first-child > td:first-child > a');

  andThen(function() {
    assert.equal(currentURL(), '/deployments/1/satellite');
    assert.equal($.trim(find('h1').text()), 'New RHCI Deployment: Deployment number 0');
  });
});