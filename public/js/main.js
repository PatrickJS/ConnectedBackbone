(function() {
  window.App = {
    Models: {},
    Collections: {},
    Views: {}
  };

  var vent = _.extend({}, Backbone.Events);

  App.Views.Appointment = Backbone.View.extend({
  });
  App.Models.Appointment = Backbone.Model.extend({
  });
  App.Collections.Appointments = Backbone.Collection.extend({
    model: App.Models.Appointment
  });

  App.Views.Appointments = Backbone.View.extend({
    initialize: function() {
      vent.on('appointment:show', this.show, this);
    },
    show: function(id) {
      var appointment = this.collection.get(id),
          appointmentView = new App.Views.Appointment({model: appointment});

      $('body').append(appointmentView.render().el );

      console.log('showing the appointment with the id of: '+ appointment);
    }
  });

  App.Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'appointment/:id': 'showAppointment'
    },
    index: function() {
      console.log('in the index page');
    },
    showAppointment: function(id) {
      vent.trigger('appointment:show', id);
      console.log('appointment id: '+id);
    }

  });
  var someCollection = new App.Collections.Appointments([{id:8}]);
  new App.Views.Appointments({collection: someCollection});
  new App.Router();
  Backbone.history.start();

}());
