import Ember from 'ember';

export default Ember.ObjectController.extend({
  /*needs: ['application'],*/
  /*postContent: Ember.computed.alias('controllers.post.postContent'),
  recentPosts: Ember.computed.alias('controllers.post.recentPosts'),*/
  postContent: function() {
	return this.get('postContent');
  },
  recentPosts: function() {
	return this.get('recentPosts');
  },
  /*previousPost: Ember.computed('recentPosts.@each', function() {
	var recentPosts, index;
	recentPosts = this.get('recentPosts');
	index = recentPosts.indexOf(this.get('postContent'));
	return recentPosts.objectAt(index - 1);
  }),
  nextPost: Ember.computed('recentPosts.@each', function() {
	var recentPosts, index;
	recentPosts = this.get('recentPosts');
	//console.log(recentPosts);
	//console.log(this.get('postContent'));
	//console.log(recentPosts.indexOf(this.get('postContent')));
	index = recentPosts.indexOf(this.get('postContent'));
	//console.log(index+1);
	return recentPosts.objectAt(index + 1);
  }),
  nextModel: Ember.computed('model', function() {
	return Ember.RSVP.hash({
		postContent: this.get('postContent'),
		recentPosts: this.get('recentPosts'),
		id: this.get('nextPost').id
	});
  })*/
  nextPost: function() {
	return this.get('nextPost');
  },
});