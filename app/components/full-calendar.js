//Thanks to https://github.com/jrue3084/amca/ for the code for this page.
//It really helps with creating the full-calendar without having to use ember-full-calendar

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    test: function(){
      var auth = this.get('authControllerChild');
      console.log('in nav bar sending login to auth controller');
      auth.send('logout');
    },
  },

  didInsertElement: function () {
    this._super();

    Ember.run.scheduleOnce('afterRender', this, function () {
      // some jQuery UI stuff
      console.log('afterRender ran');
      this.$('.calendar').fullCalendar( {
        header: {
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        //defaultDate: '2015-10-12',
        editable: false,
        eventLimit: true, // allow "more" link when too many events

        /* jshint ignore:start */
        /*eventClick: function(calEvent, jsEvent, view) {

          $('.modal-title').text(calEvent.title);
          $('#modalStartTime').text('Start Time: ' + moment(calEvent.start).format("h:mm A"));
          $('#modalDescription').text(calEvent.description);
          $('#myModal').modal('show');
        },*/
        /* jshint ignore:end */
        eventRender: function(event, element) {
          element.css("font-size","1.1em");
          element.css("cursor","pointer");
          //element.css("word-wrap","normal");

        },
        events: 'api/events/'
      });
    });
  }
});