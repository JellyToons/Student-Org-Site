import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		console.log("event info from routes calendar");
		var eventStuff = this.store.all('event');
		console.log("about to show eventStuff");
		console.log(eventStuff);
		console.log(eventStuff.content);
		//console.log(eventStuff.content.content);
		//return this.store.find('event');
		//return eventStuff.content;
		return [
		{
			id: 1,
			title: 'super fun thing',
			start: '2015-10-11',
		},
		{
			id: 2,
			title: 'not so fun thing',
			start: '2015-10-13',

		},
		{
			id: 3,
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