(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index'
    },
    index: function() {
      console.log('in the index page');
    }
  });
  new App.Router;
  Backbone.history.start();
}());
