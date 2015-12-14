import Ember from 'ember';

export default Ember.Controller.extend({
	orgAboutList: (function(){
		return this.store.peekAll('orgabout');
	}).property('orgAboutList'),
});
