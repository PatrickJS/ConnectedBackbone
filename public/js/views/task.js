App.Views.Task = Backbone.View.extend({
  initialize: function() {
    // _.bindAll(this, 'editTask', 'render') // fix the content to many methods
    this.model.on('change', this.render, this);
  },
  tagName: 'li',
  template: App.Template('task.template'),
  events: {
    'click button.edit': 'editTask'
  },
  editTask: function() {
    var newTaskTitle = prompt('What would you like to change the text to?', this.model.get('title'));
    this.model.set('title', newTaskTitle);
  },
  render: function() {
    var template = this.template(this.model.attributes);
    this.$el.html(template);
    return this;
  }
});
