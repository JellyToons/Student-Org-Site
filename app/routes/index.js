import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return Ember.RSVP.hash({
			// Pull in the models used in /calendar and /posts
			posts: this.modelFor('application').posts,
			events: this.modelFor('application').events,
		});
    },
});
