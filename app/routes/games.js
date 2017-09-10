import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('game')
  },
  actions: {
    createGame(game) {
      if (game.date) {
        let newGame = this.get('store').createRecord('game', game)
        newGame.save()
      }
    },
    deleteGame(game) {
      game.destroyRecord()
    }
  }
});
