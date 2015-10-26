import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	start: DS.attr('date'),
	end: DS.attr('date'),
	allday: DS.attr('boolean')
}).reopenClass({
  FIXTURES: [
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
    },
  ]
});



