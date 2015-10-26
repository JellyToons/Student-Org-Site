import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createAccount(name) {
      //TODO: add account to database
      var pass = this.get('password');
      this.store.createRecord('user',{
      	name: name,
      	password: pass
      });
      //users.save();
      this.set('name', '');
      this.set('password', '');
      this.set('password2', '');

      alert(name + " was added.");
    }
  }

});
