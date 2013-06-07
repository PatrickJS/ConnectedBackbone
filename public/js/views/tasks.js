App.Views.Tasks = Backbone.View.extend({
  tagName: 'ul',
  render: function() {
    this.collection.each(this.addOne, this);
  },
  addOne: function(task) {
    // creating a new child view
    var taskView = new App.Views.Task({model: task});
    // append to the root element
    this.$el.append(taskView.render().el);
  }
});
