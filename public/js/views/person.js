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

var people = new People();
people.add(person);

var person2 = new Person({name:'Patrick', age:23});
var personView2 = new PersonView({model: person2});

people.add(person2);

console.log(people);

$('body').html(personView.el).append(personView2.el);
