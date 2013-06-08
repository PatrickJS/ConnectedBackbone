App.Views.AddTask = Backbone.View.extend({
  initialize: function() {
  },
  el: '#addTask',
  events: {
    'submit': 'submit'
  },
  submit: function(e) {
    var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
    var task = new App.Models.Task({title: newTaskTitle});
    this.collection.add(task);
    return false; // same as e.preventDefault()
  }
});
