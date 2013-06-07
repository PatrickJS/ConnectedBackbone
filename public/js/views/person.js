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


var people = new People([
  {
    name: 'Patrick',
    age: 23
  },
  {
    name: 'John Doe',
    age: 55
  },
  {
    name: 'Sally Doe',
    age: 29
  }
  ]);

console.log(people);

var model = people.at(0);

console.log('name: ',model.get('name'));
console.log('occupation: ',model.get('occupation'));
console.log(people.toJSON());

model.set('occupation', 'Web Developer');

console.log('occupation: ',model.get('occupation'));
console.log(people.toJSON());

$('body').html();
