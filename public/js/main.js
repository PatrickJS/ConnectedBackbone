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
    }
  });
  new App.Router();
  Backbone.history.start();
}());
