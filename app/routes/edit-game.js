import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateGame(game) {
      if (game.date) {
        game.save()
        this.transitionTo('game', game)
      }
    }
  }
});
