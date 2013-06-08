App.Models.Task = Backbone.Model.extend({
  initialize: function() {
    this.on('invalid', function(model, error) {
      alert(error);
    });
  },
  validate: function(attrs) {
    if (!$.trim(attrs.title)) {
      return 'A task requires a valid title';
    }
  }
});
