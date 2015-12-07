import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.get('store').find('post', params.post_id);
	},
	setupController: function(controller, model){
		var recent = this.modelFor('application').posts;
		var profiles = this.modelFor('application');
		//console.log(profiles);
		/*var profiles = $()*/

		controller.set('recentPosts', recent);
		controller.set('postContent', model);
		controller.set('previousPost', (function(){
			var index = recent.indexOf(model);
			if (recent.objectAt(index - 1) !== undefined) { index = index -1; }
			return recent.objectAt(index);
		}()));
		controller.set('nextPost', (function(){
			var index = recent.indexOf(model);
			if (recent.objectAt(index + 1) !== undefined) { index = index +1; }
			return recent.objectAt(index);
		}()));
		controller.set('profiles', profiles);

	},
});
