import Ember from 'ember';

export default Ember.Controller.extend({
  
  session: Ember.inject.service('session'),

  actions: {
    authenticate(){
      //do stuff to authenticate here
      console.log('login');
      var user = this.get('identification');
      if(user!=="Brian"){
        this.set('errorMsg', 'invalid attempt');
      }
      else{
        this.set('loggedIn', true);
        this.transitionTo('index');
      }

    },
    test: function(){
      console.log('test');
    }
  }
});