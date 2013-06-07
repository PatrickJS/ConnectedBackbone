App.Views.Task = Backbone.View.extend({
  tagName: 'li',
  template: App.Template('task.template'),
  events: {
    'click button.edit': 'editTask'
  },
  editTask: function() {
    console.log(this.model);
    alert('You\'re editing the task');
  },
  render: function() {
    var template = this.template(this.model.attributes);
    this.$el.html(template);
    return this;
  }
});
