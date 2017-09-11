import Ember from 'ember';

export default Ember.Component.extend({
  // new plate appearance object, with all metadata set to default values
  newPlateappearance: {
    inninghalf: 'TOP',
    inning: 1,
    batter: null,
    pitcher: null,
    outcome: 'No AB',
    runs: 0,
    outs: 0,
    def_error: 0,
    firstbase: false,
    secondbase: false,
    thirdbase: false,
    homebase: false,
    firstbasemandefense: false,
    secondbasemandefense: false,
    thirdbasemandefense: false,
    shortstopdefense: false,
    leftfielddefense: false,
    centerfielddefense: false,
    rightfielddefense: false,
    shortstopdefense: false,
    pitcherdefense: false,
    catcherdefense: false,
    homer: false
  },
  actions: {
    // changes the value of inning half when a user clicks a new value from the
    // dropdown on the form.
    selectInningHalfCreate(inninghalf) {
      this.set('newPlateappearance.inninghalf', inninghalf)
    },
    // changes the value of outcome when a user clicks a new value from the form
    selectOutcomeCreate(outcome) {
      this.set('newPlateappearance.outcome', outcome)
    },
    // creates a new plate appearance based on the above object, modified with
    // the values of the form fields. Then it resets certain values to default.
    createPlateappearance() {
      this.sendAction('createPlateappearance', this.get('newPlateappearance'))
      this.set('newPlateappearance.batter', null)
      this.set('newPlateappearance.runs', 0)
      this.set('newPlateappearance.outs', 0)
      this.set('newPlateappearance.def_error', 0)
    }
  }
});
