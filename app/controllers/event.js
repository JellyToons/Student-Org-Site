import Ember from 'ember';

export default Ember.Controller.extend({
	eventContent: null,
	events: Ember.computed.alias('controllers.application.events'),
});
