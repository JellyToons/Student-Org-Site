import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},
	setupController: function(controller, model){
		controller.set('eventContent', model);
	},
});
