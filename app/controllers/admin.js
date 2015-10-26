import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	    removeUser(name) {
	      //TODO delete from database
	      alert("Removing User: " + name);
	    }
	}
});
