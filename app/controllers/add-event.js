import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addEvent() {
      //TODO: add account to database
      var title = this.get('title');
      var startDate = '';
      startDate = this.get('startDate ');
      var endDate = this.get('endDate');
      /*this.store.createRecord('event',{
      	title: title,
      	start: startDate
      });*/
      //users.save();

      //Ember.$.post( "/api/events", { title: "codePushEvent", start: "2015-12-20", end: "2015-12-22" } );
      var ev = this.store.createRecord('event', {
        title: title,
        start: startDate,
        end:   endDate
      });
      ev.save();

      alert(title + " was added for dates " + startDate + " - " + endDate);
      this.set('title', '');
      this.set('startDate', '');
      this.set('endDate', '');
      this.transitionToRoute('calendar');
    }
  }

});
