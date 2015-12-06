import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	start: DS.attr('date'),
	end: DS.attr('date'),
	//allday: DS.attr('boolean'),
	tags: DS.hasMany('tag', { async: true })
});/*.reopenClass({
  FIXTURES: [
		{
			id: 1,
			title: 'super fun thing2',
			start: '2015-12-12',
			tags: [2,3]
		},
		{
			id: 2,
			title: 'not so fun thing2',
			start: '2015-12-14',
			tags: [3]

		},
		{
			id: 3,
            title  : 'this event shows time2',
            start  : '2015-12-10T12:30:00',
            allDay : false, // will make the time show
            tags: [1,2]
        }
	]
});*/