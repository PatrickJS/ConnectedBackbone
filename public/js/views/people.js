var PeopleView = Backbone.View.extend({
  initialize: function() {
    console.log(this.collection);
  },
  tagName: 'ul',
  render: function() {
    // filter through all items in a collection
    // for each, create a new Person View
    // append to root element
    this.collection.each(function(person) {
      console.log(person);
    });
  }
});
