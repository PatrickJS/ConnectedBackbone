var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.render();
  },
  template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),
  render: function() {
    // anti-pattern
    this.$el.html(this.template(this.model.toJSON()));
  }
});

var person = new Person();
var personView = new PersonView({model: person});
$('body').html(personView.el);
