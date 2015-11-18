import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  password: DS.attr('string'),
  emailAddress: DS.attr('string'),
  profileImageUrl: DS.attr('string'),
  posts: DS.hasMany('post')
});/*.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Brian Barrett',
      username: 'Brian',
      password: 'admin',
      emailAddress: 'BrainSBarrett@jourrapide.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/cacique/73.jpg',
      posts: [1]
    },
    {
      id: 2,
      name: 'Janice Collins',
      username: 'Chris',
      password: 'admin',
      emailAddress: 'JaniceRCollins@dayrep.com',
      profileImageUrl: 'http://s3.amazonaws.com/uifaces/faces/twitter/visionarty/73.jpg',
      posts: [2]
    },
  ]
});*/