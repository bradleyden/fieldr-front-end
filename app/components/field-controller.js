import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleFirstbase() {
      this.plateappearance.toggleProperty('firstbase')
    },
    toggleSecondbase() {
      this.plateappearance.toggleProperty('secondbase')
    },
    toggleThirdbase() {
      this.plateappearance.toggleProperty('thirdbase')
    },
    toggleHomebase() {
      this.plateappearance.toggleProperty('homebase')
    },
    togglePitcherdefense() {
      this.plateappearance.toggleProperty('pitcherdefense')
    },
    toggleCatcherdefense() {
      this.plateappearance.toggleProperty('catcherdefense')
    },
    toggleFirstbasemandefense() {
      this.plateappearance.toggleProperty('firstbasemandefense')
    },
    toggleSecondbasemandefense() {
      this.plateappearance.toggleProperty('secondbasemandefense')
    },
    toggleThirdbasemandefense() {
      this.plateappearance.toggleProperty('thirdbasemandefense')
    },
    toggleShortstopdefense() {
      this.plateappearance.toggleProperty('shortstopdefense')
    },
    toggleLeftfielderdefense() {
      this.plateappearance.toggleProperty('leftfielderdefense')
    },
    toggleCenterfielderdefense() {
      this.plateappearance.toggleProperty('centerfielderdefense')
    },
    toggleRightfielderdefense() {
      this.plateappearance.toggleProperty('rightfielderdefense')
    },
    toggleHomer() {
      this.plateappearance.toggleProperty('homer')
    }
  }
});
