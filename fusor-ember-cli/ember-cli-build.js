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
  app.import('bower_components/jquery-csv/src/jquery.csv.js');
  app.import('bower_components/matchmedia/matchMedia.js');

  // any app.import lines below are should ONLY appear in development ember-cli branches and not in 'master branch'

  /* Boostrap JS */
  app.import('bower_components/patternfly/components/bootstrap/js/alert.js');
  app.import('bower_components/patternfly/components/bootstrap/js/button.js');
  app.import('bower_components/patternfly/components/bootstrap/js/modal.js');
  app.import('bower_components/patternfly/components/bootstrap/js/dropdown.js');
  app.import('bower_components/patternfly/components/bootstrap/js/tab.js');
  app.import('bower_components/patternfly/components/bootstrap-combobox/js/bootstrap-combobox.js');
  app.import('bower_components/patternfly/components/bootstrap-select/js/bootstrap-select.js');

  /* Boostrap CSS */
  app.import('bower_components/patternfly/dist/css/patternfly.css');
  app.import('bower_components/patternfly/dist/css/patternfly-additions.css');

  /* Fonts & Icons */
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Bold-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Bold-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-BoldItalic-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-BoldItalic-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-ExtraBold-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-ExtraBold-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-ExtraBoldItalic-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-ExtraBoldItalic-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Italic-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Italic-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Light-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Light-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-LightItalic-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-LightItalic-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Regular-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Regular-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Semibold-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-Semibold-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-SemiboldItalic-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/OpenSans-SemiboldItalic-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.ttf', {destDir: 'fonts'});
  app.import('bower_components/patternfly/dist/fonts/PatternFlyIcons-webfont.woff', {destDir: 'fonts'});
  app.import('bower_components/patternfly/components/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'components/font-awesome/fonts'});
  app.import('bower_components/patternfly/components/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'components/font-awesome/fonts'});
  app.import('bower_components/patternfly/components/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'components/font-awesome/fonts'});

  return app.toTree();
};
