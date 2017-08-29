import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateGame(game) {
      this.sendAction('updateGame', this.get('game'))
    }
  }
});
