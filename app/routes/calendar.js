import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		console.log("event info from routes calendar");
		console.log(this.store.find('event'));
		//return this.store.find('event');
		return [
		{
			title: 'super fun thing',
			start: '2015-10-11',
		},
		{
			title: 'not so fun thing',
			start: '2015-10-13',

		},
		{
            title  : 'this event shows time',
            start  : '2015-10-09T12:30:00',
            allDay : false // will make the time show
        }
		];
	},
	setupController: function(controller, model){
		controller.set('events', model);
	}
});