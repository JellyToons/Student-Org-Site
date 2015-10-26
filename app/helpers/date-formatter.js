/* globals moment */
import Ember from 'ember';

export function dateFormatter(format, date) {
  if (typeof(format) !== 'string') {
    format = 'MMMM DD, YYYY';
  }
  if (date == null) {
    date = Date.now();
  }
  return moment(date).format(format);
}

export default Ember.Handlebars.makeBoundHelper(dateFormatter);