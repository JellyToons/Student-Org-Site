import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addEvent() {
      //TODO: add account to database
      var title = this.get('title');
      var eventDate = this.get('eventDate');
      this.store.createRecord('event',{
      	title: title,
      	start: eventDate
      });
      //users.save();
      this.set('title', '');
      this.set('eventDate', '');

      alert(title + " was added.");
    }
  }

});
