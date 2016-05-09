import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('champion');
  this.route('role', { path: 'role/:roleId' });
});

export default Router;
