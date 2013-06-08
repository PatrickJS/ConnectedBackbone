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
      'download/:id/*filename': 'download'
    },
    index: function() {
      console.log('in the index page');
    },
    show: function(id) {
      console.log('show routes for id of: ' + id);
    },
    download: function(id) {
      console.log(id);
    }
  });
  new App.Router();
  Backbone.history.start();
}());
