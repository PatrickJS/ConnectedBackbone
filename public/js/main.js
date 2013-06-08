(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'appointment/:id': 'showAppointment'
    },
    index: function() {
      console.log('in the index page');
    },
    showAppointment: function(id) {
      console.log('appointment id: '+id);
    }

  });

  new App.Router();
  Backbone.history.start();

}());
