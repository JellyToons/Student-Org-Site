import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			// Pull in the models used in /calendar and /posts
			calendar: this.modelFor('calendar'),
			posts: this.modelFor('posts'),
		});
    },
	setupController: function(controller, model){
		controller.set('events', model);
	}
});
