import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'',
  actions: {
    deleteGame() {
      return this.sendAction('deleteGame', this.get('game'))
    }
  }
});
