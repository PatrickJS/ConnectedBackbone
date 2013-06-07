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

var person = new Person();
var personView = new PersonView({model: person});

var person2 = new Person({name:'Patrick', age:23});
var personView2 = new PersonView({model: person2});

var people = [personView, personView2];

$('body').html(personView.el).append(personView2.el);
