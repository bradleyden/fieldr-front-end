import Ember from 'ember';

export default Ember.Component.extend({
  sortedPlateappearances: Ember.computed.sort('game.plateappearances', 'sortDefinition'),
  sortDefinition: ['id'],
  actions: {
    createPlateappearance (plateappearance) {
      console.log(plateappearance.id)
      plateappearance.game = this.get('game')
      return this.sendAction('createPlateappearance', plateappearance)
    },
    deletePlateappearance (plateappearance) {
      return this.sendAction('deletePlateappearance', plateappearance)
    }
  }
});
