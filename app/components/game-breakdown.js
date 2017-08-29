import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPlateappearance (plateappearance) {
      plateappearance.game = this.get('game')
      return this.sendAction('createPlateappearance', plateappearance)
    }
  }
});
