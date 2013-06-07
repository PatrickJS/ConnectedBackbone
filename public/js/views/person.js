var PersonView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    console.log('hi there', this.model);
  },
  render: function() {

  }
});

var person = new Person();
var personView = new PersonView({model: person});
