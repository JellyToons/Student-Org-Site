import Ember from 'ember';

export default Ember.Controller.extend({
    username: '',
    isLoggedIn: false,
    errorMsg: '',
    remember: false,
    actions: {
        login: function(){
            //do stuff to authenticate here
            var username = this.get('username');
            var password = this.get('password');
            var data = {
                'username': username,
                'password': password};
            var controllerObj = this;
            var app = this.controllerFor('application');
            Ember.$.post('../api/session/', data, function(response){
                if(response.isauthenticated){
                    //success
                    //console.log('Login POST Request to ../api/session/ was successful.');
                    controllerObj.set('username', response.username);
                    controllerObj.set('userid', response.userid);
                    controllerObj.set('isLoggedIn', true);
                    app.set('posts', controllerObj.store.findAll('post'));
                    app.set('events', controllerObj.store.findAll('event'));
                    app.set('orgnames', controllerObj.store.findAll('orgname'));
                    app.set('tags', controllerObj.store.findAll('tag'));
                    app.set('userprofiles', controllerObj.store.findAll('userprofile'));
                    controllerObj.transitionToRoute('home'); //redirects back home after login
                    //controllerObj.transitionTo('application');
                } else {
                    //errors
                    //console.log('Login POST Request to ../api/session/ was successful but with errors.');
                    controllerObj.set('errorMsg', response.message);
                }
            });
        },
        logout: function(){
            var remember = this.get('remember');
            var controllerObj = this;
            Ember.$.ajax({url: '../api/session/', type: 'DELETE'}).then(
            function(){
                //console.log('Logout success.');
                controllerObj.set('isLoggedIn', false);
                controllerObj.set('errorMsg', '');
                controllerObj.set('username', '');
                controllerObj.set('userid', '');
                if(!remember){
                    //save to username and pass to local storage

                }
                controllerObj.transitionToRoute('auth');
            });

        },
    }
});