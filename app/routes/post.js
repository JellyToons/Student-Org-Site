import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		//console.log(this.get('store').find('post', params.post_id));
		return this.get('store').find('post', params.post_id);
	},
});
