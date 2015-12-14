import Ember from 'ember';

export default Ember.Controller.extend({

	orgNameList: (function(){
		return this.store.peekAll('orgname');
	}).property('orgNameList'),

	orgAboutList: (function(){
		return this.store.peekAll('orgabout');
	}).property('orgAboutList'),


	posts: (function(){
		return this.store.peekAll('post');
	}).property('posts'),
	sorting: ['id:desc'],
	sortedposts: Ember.computed.sort('posts', 'sorting'),
	eventlist: (function(){
		return this.store.peekAll('event');
	}).property('eventlist'),
});
