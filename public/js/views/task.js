App.Views.Task = Backbone.View.extend({
  tagName: 'li',
  template: App.Template('task.template'),
  events: {
  },
  render: function() {
    console.log( this.template(this.model.toJSON() ) );
    this.$el.html(this.model.get('title'));
    return this;
  }
});
