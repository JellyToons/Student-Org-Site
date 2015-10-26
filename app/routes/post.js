import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		/*return this.get('store').find('post', params.post_id);*/
		/*return Ember.RSVP.hash({
			postContent: this.get('store').find('post', params.post_id),
			recentPosts: this.get('store').find('post').then(function(posts) {
					return posts.sortBy('datePublished').reverseObjects();
				})
		});*/

		var current = this.get('store').find('post', params.post_id);
		var recent = this.get('store').find('post').then(function(posts) {
					return posts.sortBy('datePublished').reverseObjects();
				});
		console.log(recent);
		var nextIndex = recent.indexOf(current);
		//if (recent.objectAt(nextIndex - 1) !=== undefined) { nextIndex = nextIndex - 1; }
		var next = recent.objectAt(nextIndex);
		return Ember.RSVP.hash({
			postContent: current,
			recentPosts: recent,
			nextPost: next
		});
	},
	setupController: function(controller, model){
		controller.set('postContent', model.postContent);
		controller.set('recentPosts', model.recentPosts);
		/*controller.set('previousPost', (function(){
			var index = model.recentPosts.indexOf(model.postContent);
			if (model.recentPosts.objectAt(index - 1) !== undefined) { index = index -1; }
			return model.recentPosts.objectAt(index);
		}()));
		controller.set('nextPost', (function(){
			var index = model.recentPosts.indexOf(model.postContent);
			if (model.recentPosts.objectAt(index + 1) !== undefined) { index = index +1; }
			return model.recentPosts.objectAt(index);
		}()));
		controller.set('nextModel', (function(){
			console.log(controller.get('postContent').id);
			return Ember.RSVP.hash({
				postContent: model.postContent,
				recentPosts: model.recentPosts,
				id: controller.get('nextPost').id
			});
		}()));
		console.log(controller.get('nextModel').result);*/

		controller.set('nextPost', model.nextPost);
	}
});
