var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: 'Worker'
  },
  work: function() {
    return this.get('name') + ' is working.';
  }
});
