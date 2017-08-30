import Ember from 'ember';

export default Ember.Component.extend({
  newPlateappearance: {
    inninghalf: 'TOP',
    inning: 1,
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
      this.set('newPlateappearance.batter', null)
      this.set('newPlateappearance.outcome', 'No AB')
      this.set('newPlateappearance.runs', 0)
      this.set('newPlateappearance.outs', 0)
      this.set('newPlateappearance.def_error', 0)
    }
  }
});
