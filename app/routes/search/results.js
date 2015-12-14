import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
	var kword = params.keyword;
	var rx = new RegExp(kword, 'gi');
	return this.store.peekAll('post').filter(function(post) {
		return post.get('title').match(rx) || post.get('subtitle').match(rx) || post.get('content').match(rx);
	});
  },
  serialize: function(keyword) {
    return {keyword: keyword};
  }

});
