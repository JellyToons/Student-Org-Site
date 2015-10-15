import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		console.log(this.store.find('event'));
		return this.store.find('event');
	},
	setupcontroller: function(controller, model){
		controller.set('events', model);
	}
});