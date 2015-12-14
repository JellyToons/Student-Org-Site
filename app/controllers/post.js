import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  postContent: null,
  posts: (function(){
    return this.store.peekAll('post');
  }).property('posts'),
  previousPost: Ember.computed('postContent', 'posts.@each', function() {
    var posts, index;
    posts = this.get('posts');
    index = posts.indexOf(this.get('postContent'));
    // Cap the index
    if (index !== -1) {index -= 1;}
    //console.log(posts.objectAt(index));
    return posts.objectAt(index);
  }),
  nextPost: Ember.computed('postContent', 'posts.@each', function() {
    var posts, index;
    posts = this.get('posts');
    index = posts.indexOf(this.get('postContent'));
    // Cap the index
    if (index !== -1) {index += 1;}
    return posts.objectAt(index);
  }),

  topposts: Ember.computed('posts', function(){
    return this.get('posts').toArray().reverse().slice(0, 4);
  }),
  tags: (function(){
    return this.store.peekAll('tag');
  }).property('tags'),
  profiles: (function(){
    return this.store.peekAll('userprofiles');
  }).property('profiles'),
});