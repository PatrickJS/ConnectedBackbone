(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'show': 'show'
    },
    index: function() {
      console.log('in the index page');
    },
    show: function() {
      console.log('show routes');
    }
  });
  new App.Router();
  Backbone.history.start();
}());
