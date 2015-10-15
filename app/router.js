import Ember from 'ember';
import config from './config/environment';
import blogRoutes from 'ember-blog/routes';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {});
  this.route('calendar', {});
  this.route('about', {});
  this.route('admin', {});
  blogRoutes(this);
});

export default Router;
