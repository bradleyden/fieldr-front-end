import Ember from 'ember';

export default Ember.Component.extend({
  // object to store the updated date when a game is edited
  updatedGame: {
    date: null
  },
  actions: {
    // this function formats the date object from the pikaday input into a
    // string and then stores the date value in the object above.
    updateDate(date) {
      const formatMonth = function (input) {
        let month = '' + (input.getMonth() + 1)
        if (month.length < 2) {
          month = '0' + month
          return month
        } else {
          return month
        }
      }
      const formatDay = function (input) {
        let day = '' + (input.getDate())
        if (day.length < 2) {
          day = '0' + day
          return day
        } else {
          return day
        }
      }
      const dateFormated = '' + date.getFullYear() + '-' + formatMonth(date) + '-' + formatDay(date)
      this.set('updatedGame.date', dateFormated)
    },
    // if a new date was selected from pikaday, it will plug the new date value
    // into the date object. Then it will update the game based on the form fields.
    updateGame(game) {
      if (this.get('updatedGame.date')) {
        this.set('game.date', this.get('updatedGame.date'))
      }
      this.sendAction('updateGame', this.get('game'))
    }
  }
});
