alert('hi bob.js');
// stupid dirty hack until we get rid of turbolinks and its twisted tricks that break
// the web :()
(function() {
  var hackForTurboLinks = function(App) {
    var initialized, reset, rootElementSelector;
    App.deferReadiness();
    rootElementSelector = App.rootElement;
    initialized = false;
    reset = function() {
      if ($(rootElementSelector).length) {
        initialized = true;
        return App.reset();  // Designed for tests, but works for this hack too
      }
    };
    // page:load is needed on a clean browser refresh
    // because turbolinks won't call page:change
    $(document).one('page:load', function() {
      if (!initialized) {
        return reset();
      }
    });
    return $(document).on('page:change', reset);
  };

  hackForTurboLinks(App);

}).call(this);