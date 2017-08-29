import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteGame() {
      return this.sendAction('deleteGame', this.get('game'))
    }
  }
});
