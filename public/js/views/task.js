App.Views.Task = Backbone.View.extend({
  tagName: 'li',
  template: App.Template('task.template'),
  events: {
  },
  render: function() {
    var template = this.template(this.model.attributes);
    this.$el.html(template);
    return this;
  }
});
