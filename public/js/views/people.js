App.Views.People = Backbone.View.extend({
  initialize: function() {
  },
  tagName: 'ul',
  render: function() {
    // filter through all items in a collection
    this.collection.each(function(person) {
      // for each, create a new Person View
      var personView = new App.Views.Person({model: person});
      // append to root element
      this.$el.append(personView.render().el);
    }, this);

    return this;
  }
});
