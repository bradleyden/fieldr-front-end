import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectOutcomeEdit(outcome) {
      this.get('plateappearance').set('outcome', outcome)
    },
    selectInningHalfEdit(inninghalf) {
      this.get('plateappearance').set('inninghalf', inninghalf)
    },
    editPlateappearance (plateappearance) {
      this.sendAction('editPlateappearance', this.get('plateappearance'))
    }
  }
});
