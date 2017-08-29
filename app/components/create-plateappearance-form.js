import Ember from 'ember';

export default Ember.Component.extend({
  newPlateappearance: {
    inninghalf: 'TOP',
    inning: null,
    batter: null,
    pitcher: null,
    outcome: 'No AB',
    runs: 0,
    outs: 0,
    def_error: 0
  },
  actions: {
    selectInningHalf(inninghalf) {
      console.log(inninghalf)
      this.set('newPlateappearance.inninghalf', inninghalf)
    },
    selectOutcome(outcome) {
      this.set('newPlateappearance.outcome', outcome)
    },
    createPlateappearance() {
      this.sendAction('createPlateappearance', this.get('newPlateappearance'))
    }
  }
});
