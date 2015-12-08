import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addEvent() {
      var title = this.get('title');
      var startDate = this.get('startDate');
      var endDate = this.get('endDate');

      var ev = this.store.createRecord('event', {
        title: title,
        start: startDate,
        end:   endDate
      });
      ev.save();

      this.set('title', '');
      this.set('startDate', '');
      this.set('endDate', '');
      this.transitionToRoute('calendar');
    }
  }

});
