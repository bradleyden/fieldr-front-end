import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('game');
  },
  actions: {
    createGame(game) {
      // Ember.set(game, 'home', JSON.stringify(game.home))
      // Ember.set(game, 'away', JSON.stringify(game.away))
      console.log(game)
      let newGame = this.get('store').createRecord('game', game)
      newGame.save()
    }
  }
});
