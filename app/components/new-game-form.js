import Ember from 'ember';

export default Ember.Component.extend({
  // new game object with all metadata set to default values for when game is
  // initialized
  newGame: {
    date: null,
    home: null,
    away: null,
    awayRuns: 0,
    homeRuns: 0,
    awayHits: 0,
    homeHits: 0,
    awayErrors: 0,
    homeErrors: 0,
    totalInnings: 1,
    topOne: 0,
    botOne: 0,
    topTwo: 0,
    botTwo: 0,
    topThree: 0,
    botThree: 0,
    topFour: 0,
    botFour: 0,
    topFive: 0,
    botFive: 0,
    topSix: 0,
    botSix: 0,
    topSeven: 0,
    botSeven: 0,
    topEight: 0,
    botEight: 0,
    topNine: 0,
    botNine: 0,
    topTen: 0,
    botTen: 0,
    topEleven: 0,
    botEleven: 0,
    topTwelve: 0,
    botTwelve: 0,
    topThirteen: 0,
    botThirteen: 0,
    topFourteen: 0,
    botFourteen: 0,
    topFifteen: 0,
    botFifteen: 0,
    topSixteen: 0,
    botSixteen: 0,
    topSeventeen: 0,
    botSeventeen: 0,
    topEighteen: 0,
    botEighteen: 0
  },
  actions: {
    // converts date object from pikaday input to string, and then creates
    // a game when the new game form is submitted
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
