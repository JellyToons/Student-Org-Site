import Ember from 'ember';

export default Ember.Controller.extend({
	posts: (function(){
		return this.store.peekAll('post');
	}).property('posts'),
	events: (function(){
		return this.store.peekAll('event');
	}).property('events'),
});
