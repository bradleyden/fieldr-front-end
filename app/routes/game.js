import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('game', params.game_id);
  },
  actions: {
    createPlateappearance(plateappearance) {
      let newPlateappearance = this.get('store').createRecord('plateappearance', plateappearance)
      newPlateappearance.save()
    }
  }
});
