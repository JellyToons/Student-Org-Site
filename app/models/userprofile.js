import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  profileImageUrl: DS.attr('string'),
  posts: DS.hasMany('post')
});