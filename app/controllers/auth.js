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
				this.set('errorMsg', 'invalid attempt');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('index');
			}
			this.set('password', '');

		},
		logout: function(){
			this.set('loggedIn', false);
			this.set('username', '');
			this.set('password', '');
		},
		test: function(){
			console.log('test');
		}
	}
});