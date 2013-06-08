(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show',
      'download/*filename': 'download',
      'search/:query': 'search',
      '*pathname': 'defaultRoute'
    },
    index: function() {
      console.log('in the index page');
    },
    show: function(id) {
      console.log('show routes for id of: ' + id);
    },
    download: function(filename) {
      console.log(filename);
    },
    search: function(query) {
      console.log(query);
    },
    defaultRoute: function(pathname) {
      alert('not sure what you mean here... ' + pathname);
      console.log(pathname);
    }

  });

  new App.Router();
  Backbone.history.start();

}());
