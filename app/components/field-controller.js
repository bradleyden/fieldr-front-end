import Ember from 'ember';

export default Ember.Component.extend({
  // toggles the boolean values of each position/base when a user clicks the svg
  // object on the field graphic. This boolean value determines the object's class,
  // which determines its styling.
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
    toggleleftfielddefense() {
      this.plateappearance.toggleProperty('leftfielddefense')
    },
    togglecenterfielddefense() {
      this.plateappearance.toggleProperty('centerfielddefense')
    },
    togglerightfielddefense() {
      this.plateappearance.toggleProperty('rightfielddefense')
    },
    toggleHomer() {
      this.plateappearance.toggleProperty('homer')
    }
  }
});
