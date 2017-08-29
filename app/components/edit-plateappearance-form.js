import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editPlateappearance (plateappearance) {
      this.sendAction('editPlateappearance', this.get('plateappearance'))
    }
  }
});
