import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//do stuff to authenticate here
			console.log('login');
			var user = this.get('username');
			if(user!=="Brian"){
				this.set('errorMsg', 'youre not awesome');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		},
		test: function(){
			console.log('test');
		}
	}
});