import Ember from 'ember';

export default Ember.Route.extend({
	// model: function(params) {
	// 	return params.s;
	// },
	// setupController: function(controller, model){
	// 	controller.set('search', model);
	// },
	
  actions: {
    search: function(keyword) {
      this.transitionTo('search.results', keyword);
    }
  }
});
