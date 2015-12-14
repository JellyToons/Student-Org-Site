import Ember from 'ember';

export default Ember.Component.extend({
	authControllerChild: null,
	// posts: (function(){
	// 	return this.store.peekAll('post');
	// }).property('posts'),
	// search: '',
	// filteredPosts: function () {
	// 	var filter = this.get('search');
	// 	var rx = new RegExp(filter, 'gi');
	// 	var posts = this.get('posts');
	// 		console.log(filter);
	// 		console.log(posts);

	// 	return posts.filter(function(post){
	// 		return post.get('title').match(rx) || post.get('subtitle').match(rx);
	// 	});
	// }.property('posts.@each', 'searchField'),
	// actions: {
	// 	foo: function(){
	// 		var auth = this.get('authControllerChild');
	// 		auth.set('username', 'cheese');
	// 		alert(auth.get('username'));
	// 	},
	// 	search: function () {
	// 		this.sendAction();
	// 		// console.log(this.controllerFor('application').get('currentRouteName'));
	// 		// this.set('loading', true);
	// 		// this.get('posts')/*.content.clear()*/;
	// 		//this.store.unloadAll('photo');
	// 		//this.send('getPhotos', this.get('tagSearchField'));
	// 	},
	// }
});
