var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
  },
  template: template('person.template'),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
