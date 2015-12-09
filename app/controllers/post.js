import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application'],
  postContent: null,
  posts: (function(){
    return this.store.peekAll('post');
  }).property('posts'),
  previousPost: Ember.computed('model', 'posts.@each', function() {
    var posts, index;
    posts = this.get('posts');
    //console.log('b4 posts');
    //console.log(posts);
    index = posts.indexOf(this.get('model'));
    // Cap the index
    if (index !== -1) {index -= 1;}
    return posts.objectAt(index);
  }),
  nextPost: Ember.computed('model', 'posts.@each', function() {
    var posts, index;
    posts = this.get('posts');
    index = posts.indexOf(this.get('model'));
    // Cap the index
    if (index !== -1) {index += 1;}
    return posts.objectAt(index);
  }),
  /*previousPost: function(){
      var index = recent.indexOf(model);
      if (recent.objectAt(index - 1) !== undefined) { index = index -1; }
      return recent.objectAt(index);
  },*/

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