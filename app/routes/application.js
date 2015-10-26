import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	beforeModel: function(transition){
		this.authCheck(transition);
		//will have other stuff here once its connected to restapi
	},
	  // Data here is accessible from anywhere in the application
	  model: function() {
		return Ember.RSVP.hash({
			posts: this.get('store').find('post').then(function(posts) {
				return posts.sortBy('datePublished').reverseObjects();
			}),
			tags: this.get('store').find('tag').then(function(posts) {
				return posts.sortBy('name');
			})
	    });
	  },
	authCheck: function(transition){
		//Method to check user credentials and redirect if necessary
		console.log('Checking authentication');
		var t = this;
		var auth = t.controllerFor('auth');
		console.log("are you logged in "+ auth.get('loggedIn'));
		var previoustrans = t.get('currentTransition');
		console.log('User attempting to access: /'+transition.targetName);
		if(!auth.loggedIn){
			if(transition.targetName === 'auth' || transition.targetName === 'createAccount'){
				
			}
			else{
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenicated, redirecting');
				t.transitionTo('auth');
			}
		}
		else if(previoustrans){
			console.log('Redirecting back to original request: /'+previoustrans.targetName);
			t.set('currentTransition', null);
			previoustrans.retry();
		}
	},
	setupController: function(controller, model){
		controller.set('authController', this.controllerFor('auth'));
		controller.set('posts', model.posts);
	},
	actions: {
		willTransition: function(transition){
			this.authCheck(transition);
		}
	}
});