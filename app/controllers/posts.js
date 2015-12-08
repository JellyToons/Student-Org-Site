import Ember from 'ember';

export default Ember.Controller.extend({
	posts: (function(){
		return this.store.peekAll('post');
	}).property('posts'),
	topposts: Ember.computed('posts', function(){
		return this.get('posts').slice(0, 3);
	}),
	tags: (function(){
		return this.store.peekAll('tag');
	}).property('tags'),
});
