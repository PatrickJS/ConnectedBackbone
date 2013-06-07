(function() {
  window.App = {};
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

  var peopleView = new PeopleView({collection: people});

  $('body').append(peopleView.render().el);

}());
