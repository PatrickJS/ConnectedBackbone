var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.render();
  },
  // template: _.template($('#personTemplate').html()),
  template: '#personTemplate',
  render: function() {
    var template = _.template($(this.template).html());
    this.$el.html(template(this.model.toJSON()));
  }
});

var person = new Person();
var personView = new PersonView({model: person});
$('body').html(personView.el);
