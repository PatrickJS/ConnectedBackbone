var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: 'Worker'
  },
  validate: function(attrs) {
    if (attrs.age < 0) {
      return 'Age must be positive, stupid!';
    }
    if (!attrs.name) {
      return 'Every person should have a name!';
    }
  },
  work: function() {
    return this.get('name') + ' is working.';
  }
});
