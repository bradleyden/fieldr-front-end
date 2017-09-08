import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateGame(game) {
      game.save()
      this.transitionTo('game', game)
    }
  }
});
