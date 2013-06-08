App.Views.AddTask = Backbone.View.extend({
  initialize: function() {
  },
  el: '#addTask',
  events: {
    'submit': 'submit'
  },
  submit: function(e) {
    var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
    console.log(newTaskTitle);
    return false; // same as e.preventDefault()
  }
});
