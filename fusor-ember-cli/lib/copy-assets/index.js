var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'copy-assets',

  outputReady: function(result) {
    const BUILT_CSS_FILES = [
        './dist/assets/fusor-ember-cli.css',
        './dist/assets/fusor-ember-cli.css.map'
      ],
      CSS_DESTINATION_DIR = '../ui/app/assets/stylesheets/fusor_ui/',
      BUILT_JS_FILES = ['./dist/assets/vendor.js',
        './dist/assets/vendor.map',
        './dist/assets/fusor-ember-cli.js',
        './dist/assets/fusor-ember-cli.map'
      ],
      JS_DESTINATION_DIR = '../ui/app/assets/javascripts/fusor_ui/';

    BUILT_CSS_FILES.forEach(function (src) {
      var dst = path.join(CSS_DESTINATION_DIR, path.basename(src));
      fs.createReadStream(src).pipe(fs.createWriteStream(dst));
    });

    BUILT_JS_FILES.forEach(function (src) {
      var dst = path.join(JS_DESTINATION_DIR, path.basename(src));
      fs.createReadStream(src).pipe(fs.createWriteStream(dst));
    });
  }
};
