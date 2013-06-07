var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
  },
  template: _.template($('#personTemplate').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
