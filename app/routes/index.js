import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
	// Pull in the models used in /posts
    return this.modelFor('posts');
  }
});
