import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.modelFor('calendar');
	},
	setupController: function(controller, model){
		controller.set('events', model);
	}
});
