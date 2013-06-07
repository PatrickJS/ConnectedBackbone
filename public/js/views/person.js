var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.model.get('name'));
  }
});

var person = new Person();
var personView = new PersonView({model: person});
