App.Views.Task = Backbone.View.extend({
  tagName: 'li',
  template: template('task.template'),
  events: {
    'click span': 'showAlert'
  },
  showAlert: function(e) {
    alert('you clicked me!');
    return false;
  },
  render: function() {
    this.$el.html(this.model.get('title'));
    return this;
  }
});
