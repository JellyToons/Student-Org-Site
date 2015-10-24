import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  image: DS.attr('string'),
  content: DS.attr('string'),
  datePublished: DS.attr('string'),
  author: DS.belongsTo('user', { async: true }),
  tags: DS.hasMany('tag', { async: true })
}).reopenClass({
  FIXTURES: [
  {
      id: 1,
      title: 'Snapper Rocks Surfing',
      subtitle: 'Surfing Away on Pennies a Day',
      content: '<p>HTML-formatted article text</p>',
      image: 'http://lorempixel.com/1000/570/sports/5/',
      datePublished: new Date(Date.parse("2015-02-12T13:15:00Z")),
      author: 1,
      tags: [1, 2, 3]
    },
    {
      id: 2,
      title: 'The Best Sushi in St. Louis',
      subtitle: '',
      image: 'http://lorempixel.com/1000/570/food/8/',
      content: '<p>HTML-formatted article text</p>',
      datePublished: new Date(Date.parse("2015-02-07T16:21:00Z")),
      author: 2,
      tags: [1]
    },
  ]
});
