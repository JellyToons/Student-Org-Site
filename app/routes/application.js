import Ember from 'ember';

export default Ember.Route.extend({
  // Data here is accessible from anywhere in the application
  model: function() {
	return this.get('store').find('post').then(function(posts) {
		return posts.sortBy('datePublished').reverseObjects();
	});
  }
});