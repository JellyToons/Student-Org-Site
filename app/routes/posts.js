import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('post').then(function(posts) {
			return posts.sortBy('datePublished').reverseObjects();
		});
	}
});
