import Ember from 'ember';

export default Ember.Controller.extend({
	/*posts: (function(){
		return this.store.peekAll('post').toArray().reverse();
	}).property('posts'),
	topposts: Ember.computed('posts', function(){
		return this.get('posts').slice(0, 4);
	}),*/
	posts: (function(){
		return this.store.peekAll('post');
	}).property('posts'),
	sorting: ['id:desc'],
	sortedposts: Ember.computed.sort('posts', 'sorting'),
	eventlist: (function(){
		return this.store.peekAll('event');
	}).property('eventlist'),
	/*aposts: null,
	topposts: (function(){
		var x = this.get('sortedposts');
		console.log('stustst',x[0]);
		this.set('aposts', this.get('sortedposts'));
	}).observes('sortedposts').on('init'),*/
	/*potposts: [],
	topposts: function(){
		console.log('HHHHEEEEEEEEEEEEE');
		var i = 0;
		var t = this;
		var arr = [];
		console.log("Sorted POSTS", this.get('sortedposts'));
		console.log("Sorted POSTS", this.get('sortedposts').toArray());
		this.get('sortedposts').forEach(function(post) {
			console.log("this is a pst: ", post);
			if (i < 4) {
				t.get('potposts').push(post);
			}
			i++;
		});
	}.observes('sortedPosts').on('init'),*/
	// events: (function(){
	// 	console.log("hiihaihhh");
	// 	console.log(this.store.peekAll('event'));
	// 	return this.store.peekAll('event');
	// }).property('events'),
	/*posts: (function(){
		return this.store.peekAll('post');
	}).property('posts'),*/
});
