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
    }
  }
});
