/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

// importBootstrapJS only for isEmberCliMode so that menu bar works
var app = new EmberApp({
  storeConfigInMeta: false,
  'ember-cli-bootstrap-sassy': {
    'js': false
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-core.min.js');
// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-alert.min.js');
// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-badge.min.js');
// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-modal.min.js');
// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-progressbar.min.js');
// app.import('bower_components/ember-addons.bs_for_ember/dist/js/bs-wizard.min.js');

module.exports = app.toTree();
