import Ember from 'ember';

export default Ember.Component.extend({
  updatedGame: {
    date: null
  },
  actions: {
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
      console.log(dateFormated)
      this.set('updatedGame.date', dateFormated)
    },
    updateGame(game) {
      if (this.get('updatedGame.date')) {
        this.set('game.date', this.get('updatedGame.date'))
      }
      this.sendAction('updateGame', this.get('game'))
    }
  }
});
