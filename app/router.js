import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('games');
  this.route('game', { path: '/games/:game_id' });
  this.route('edit-game', { path: '/games/:game_id/edit' });
  this.route('plateappearances', { path: '/games/:game_id/plateappearances' })
  this.route('plateappearance-edit', { path: '/games/:game_id/plateappearances/:plateappearance_id' });
  this.route('help');
  this.route('delete-confirm', { path: '/games/:game_id/delete' });
});

export default Router;
