import Ember from 'ember';

export function eachLimit(params/*, hash*/) {
  return params[0].slice(0, params[1]);
}

export default Ember.HTMLBars.makeBoundHelper(eachLimit);
