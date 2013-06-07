var PeopleView = Backbone.View.extend({
  initialize: function() {
    console.log(this.collection);
  },
  tagName: 'ul',
  render: function() {
    // filter through all items in a collection
    this.collection.each(function(person) {
      // for each, create a new Person View
      var personView = new PersonView({model: person});
      console.log(personView.el);
    });
    // append to root element
  }
});
