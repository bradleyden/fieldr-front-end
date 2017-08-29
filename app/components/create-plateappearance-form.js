import Ember from 'ember';

export default Ember.Component.extend({
  newPlateappearance: {
    inning: null,
    batter: null,
    pitcher: null,
    outcome: null,
    runs: null,
    outs: null,
    def_error: null
  },
  actions: {
    createPlateappearance() {
      this.sendAction('createPlateappearance', this.get('newPlateappearance'))
    }
  }
});
