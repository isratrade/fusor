/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    storeConfigInMeta: false
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

  // these app.import lines are used in 'master' branch
  app.import('bower_components/patternfly/components/bootstrap/js/tooltip.js');
  app.import('bower_components/patternfly/components/bootstrap/js/popover.js');
  app.import('bower_components/patternfly/components/bootstrap/js/modal.js');
  app.import('bower_components/jquery-csv/src/jquery.csv.js');
  app.import('bower_components/matchmedia/matchMedia.js');
  app.import('bower_components/filesize/lib/filesize.js');
  app.import('bower_components/ip-address/dist/ip-address-globals.js');
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.eot', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.svg', {destDir: 'fonts'});

  return app.toTree();
};
