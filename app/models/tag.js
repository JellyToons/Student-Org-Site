import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  posts: DS.hasMany('post')
});/*.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'C',
      posts: [1,2]
    },
    {
      id: 2,
      name: 'Java',
      posts: [1]
    },
    {
      id: 3,
      name: 'Chatbot',
      posts: [1]
    },
    {
      id: 4,
      name: 'Computers',
      posts: [2]
    },
  ]
});*/