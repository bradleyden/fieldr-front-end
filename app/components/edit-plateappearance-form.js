import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectOutcome(outcome) {
      this.get('plateappearance').set('outcome', outcome)
    },
    selectInningHalf(inninghalf) {
      this.get('plateappearance').set('inninghalf', inninghalf)
    },
    editPlateappearance (plateappearance) {
      this.sendAction('editPlateappearance', this.get('plateappearance'))
    }
  }
});
