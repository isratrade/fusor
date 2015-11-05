import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'fusor-ember-cli/tests/helpers/start-app';

var application;

module('Acceptance | deployments page', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('user should see all elements on deployments page', function(assert) {

  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 10, {organization_id: org.id, lifecycle_environment_id: env.id});

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
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 3, {organization_id: org.id, lifecycle_environment_id: env.id});
  visit('/deployments');
  click('.new-deployment-button a');

  andThen(function() {
    assert.equal(currentURL(), '/deployments/new/start');
  });
});

test('display rows of deployments', function(assert) {
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 3, {organization_id: org.id, lifecycle_environment_id: env.id});
  visit('/deployments');

  andThen(function() {
    var deployments = find('tr.deployment-row');
    assert.equal(deployments.length, 3);

    var deployment_name = find('tr.deployment-row:first-child > td:first-child > a');
    assert.equal($.trim(deployment_name.text()), 'Deployment number 0');
  });
});

test('user filters list of deployments', function(assert) {
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 11, {organization_id: org.id, lifecycle_environment_id: env.id});
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

test('click edit button (last-child) for deployment on deployments page', function(assert) {
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 1, {organization_id: org.id, lifecycle_environment_id: env.id});
  visit('/deployments');
  click('tr.deployment-row:first-child > td:last-child > a');

  andThen(function() {
    assert.equal(currentURL(), '/deployments/1/satellite');
    assert.equal($.trim(find('h1').text()), 'New RHCI Deployment:  Deployment number 0');
  });
});

test('click deployment link (first-child) and verify edit deployment page', function(assert) {
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.createList('deployment', 3, {organization_id: org.id, lifecycle_environment_id: env.id});
  visit('/deployments');
  click('tr.deployment-row:first-child > td:first-child > a');

  andThen(function() {
    assert.equal(currentURL(), '/deployments/1/satellite');
    assert.equal($.trim(find('h1').text()), 'New RHCI Deployment:  Deployment number 0');
  });
});

test('display correct edit deployment page elements', function(assert) {
  var org = server.create('organization');
  var env = server.create('lifecycleenvironment');
  server.create('deployment', {organization_id: org.id, lifecycle_environment_id: env.id});
  visit('/deployments/1/satellite');

  andThen(function() {
    assert.equal($.trim(find('ul.rhci-steps > li:nth-child(1) > a').text()), '1. Satellite');
    assert.equal($.trim(find('ul.rhci-steps > li:nth-child(2) > a').text()), '2. RHEV');
    assert.equal($.trim(find('ul.rhci-steps > li:nth-child(3) > a').text()), '3. CloudForms');
    assert.equal($.trim(find('ul.rhci-steps > li:nth-child(4) > a').text()), '4. Subscriptions');
    assert.equal($.trim(find('ul.rhci-steps > li:nth-child(5) > a').text()), '5. Review');
  });
});