var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.render();
  },
  template: _.template($('#personTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
