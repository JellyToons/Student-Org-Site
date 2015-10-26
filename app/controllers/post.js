import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  recentPosts: Ember.computed.alias('controllers.application.model'),
  previousPost: Ember.computed('model', 'recentPosts.@each', function() {
    var recentPosts, index;
    recentPosts = this.get('recentPosts');
    index = recentPosts.indexOf(this.get('model'));
    return recentPosts.objectAt(index - 1);
  }),
  nextPost: Ember.computed('model', 'recentPosts.@each', function() {
    var recentPosts, index;
    recentPosts = this.get('recentPosts');
    index = recentPosts.indexOf(this.get('model'));
    return recentPosts.objectAt(index + 1);
  })
});