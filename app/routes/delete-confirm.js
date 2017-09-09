import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteGame(game) {
      game.destroyRecord()
      this.transitionTo('games')
    }
  }
});
