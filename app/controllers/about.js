import Ember from 'ember';

export default Ember.Controller.extend({
	orgAboutList: (function(){
        var app = this.controllerFor('application');
        app.set('orgabouts', this.store.findAll('orgabout'));
		return this.store.peekAll('orgabout');
	}).property('orgAboutList'),
});
