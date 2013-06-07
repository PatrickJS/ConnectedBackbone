App.Views.Person = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
  },
  template: App.Template('person.template'),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
