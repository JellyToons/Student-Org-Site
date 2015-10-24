import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  posts: DS.hasMany('post')
}).reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: 'Travel',
      posts: [1,2]
    },
    {
      id: 2,
      name: 'Surfing',
      posts: [1]
    },
    {
      id: 3,
      name: 'Chatbot',
      posts: [1]
    },
  ]
});