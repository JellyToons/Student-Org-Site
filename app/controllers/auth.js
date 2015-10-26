import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//var DBuser = this.store.find('person', { name: "Peter" });
			var DBuser = this.store.all('user');
			console.log(DBuser.content);
			console.log(DBuser.content[2].username);
			console.log(DBuser.content.length);
			//do stuff to authenticate here
			console.log('login');
			var user = this.get('username');
			var pass = this.get('password');
			var match = false;
			console.log("About to log all usernames");
			for(var i=0; i< DBuser.content.length; i++){
				console.log(DBuser.content[i]._data.username);
				if(user === DBuser.content[i]._data.username){
					if(pass === DBuser.content[i]._data.password){
						match = true;
					}
				}
			}

			for(var i=0; i< DBuser.content.length; i++){
				console.log(DBuser.content[i].username);
				if(user === DBuser.content[i].username){
					//if(pass === DBuser.content[i].password){
						match = true;
					//}
				}
			}

			if(match == false){
				this.set('errorMsg', 'invalid attempt');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('index');
				this.set('errorMsg', '');
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