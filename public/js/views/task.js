App.Views.Task = Backbone.View.extend({
  initialize: function() {
    // _.bindAll(this, 'editTask', 'render') // fix the content to many methods
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
  },
  tagName: 'li',
  template: App.Template('task.template'),
  events: {
    'click button.edit': 'editTask',
    'click button.delete': 'destory'
  },
  editTask: function() {
    var newTaskTitle = prompt('What would you like to change the text to?',this.model.get('title'));
    if (!newTaskTitle) return;

    this.model.set('title', newTaskTitle, {validate : true});
  },
  destory: function() {
    this.model.destroy();
  },
  remove: function() {
    this.$el.remove();
  },
  render: function() {
    var template = this.template(this.model.attributes);
    this.$el.html(template);
    return this;
  }
});
