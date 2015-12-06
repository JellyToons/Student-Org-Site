import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {});
  this.route('post', { path: '/post/:post_id' });
  this.route('calendar', {});
  this.route('about', {});
  this.route('admin', {});
  this.route('createAccount', {});
  this.route('auth', {});
  this.route('search', {});
  this.route('addEvent', {});
  // Catch unrecognized URLs
  this.route('bad-url', { path: '/*badurl' });
});

export default Router;
