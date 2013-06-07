var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.render();
  },
  render: function() {
    // anti-pattern
    this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ')' + ' - ' + this.model.get('occupation'));
  }
});

var person = new Person();
var personView = new PersonView({model: person});
$('body').html(personView.el);
