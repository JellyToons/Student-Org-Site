import Ember from 'ember';

export function formatEvents(params/*, hash*/) {
  return JSON.stringify(params);
}

export default Ember.HTMLBars.makeBoundHelper(formatEvents);
