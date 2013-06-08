(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show/:id': 'show'
    },
    index: function() {
      console.log('in the index page');
    },
    show: function(id) {
      console.log('show routes for id of: ' + id);
    }
  });
  new App.Router();
  Backbone.history.start();
}());
