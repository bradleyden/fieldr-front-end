import Ember from 'ember';

export default Ember.Component.extend({
  newGame: {
    date: null,
    home: null,
    away: null
  },
  actions: {
    createGame() {
      this.sendAction('createGame', this.get('newGame'))
      this.set('newGame.date', null)
      this.set('newGame.home', null)
      this.set('newGame.away', null)
    }
  }
});
