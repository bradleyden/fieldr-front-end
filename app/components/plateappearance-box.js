import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePlateappearance () {
      return this.sendAction('deletePlateappearance', this.get('plateappearance'))
    }
  }
});
