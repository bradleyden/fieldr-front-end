import Ember from 'ember';

export default Ember.Component.extend({
  newGame: {
    date: null,
    home: null,
    away: null
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
      this.set('newGame.date', dateFormated)
      console.log(this.get('newGame.date'))
    },
    createGame() {
      this.sendAction('createGame', this.get('newGame'))
      this.set('newGame.home', null)
      this.set('newGame.away', null)
    }
  }
});
