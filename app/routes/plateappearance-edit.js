import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('plateappearance', params.plateappearance_id)
  },
  actions: {
    editPlateappearance(plateappearance) {
      const scope = this
      plateappearance.save()
    }
  }
});
