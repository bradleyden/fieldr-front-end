import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const currentGame = this.get('store').findRecord('game', params.game_id);
    this.set('currentGame', currentGame)
    return currentGame
  },
  afterModel: function(model, transition) {
    Ember.run.later((function() {
      transition.send('updateScores')
    }), 1000)
  },
  actions: {
    updateScores() {
      const game = this.get('currentGame')
      let awayRuns = 0
      let homeRuns = 0
      let awayHits = 0
      let homeHits = 0
      let awayErrors = 0
      let homeErrors = 0
      let totalInnings = 1
      let topOne = 0
      let botOne = 0
      let topTwo = 0
      let botTwo = 0
      let topThree = 0
      let botThree = 0
      let topFour = 0
      let botFour = 0
      let topFive = 0
      let botFive = 0
      let topSix = 0
      let botSix = 0
      let topSeven = 0
      let botSeven = 0
      let topEight = 0
      let botEight = 0
      let topNine = 0
      let botNine = 0
      let topTen = 0
      let botTen = 0
      let topEleven = 0
      let botEleven = 0
      let topTwelve = 0
      let botTwelve = 0
      let topThirteen = 0
      let botThirteen = 0
      let topFourteen = 0
      let botFourteen = 0
      let topFifteen = 0
      let botFifteen = 0
      let topSixteen = 0
      let botSixteen = 0
      let topSeventeen = 0
      let botSeventeen = 0
      let topEighteen = 0
      let botEighteen = 0
      const plateappearanceArray = game.get('plateappearances').toArray()
      plateappearanceArray.forEach(function(item) {
        if (item.data.inning > totalInnings) {
          totalInnings = item.data.inning
          console.log(totalInnings)
        }
        if (item.data.inninghalf === 'TOP') {
          awayRuns += item.data.runs
          awayErrors += item.data.def_error
          if (item.data.outcome === 'Hit') {
            awayHits += 1
          }
          if (item.data.inning === 1) {
            topOne += item.data.runs
          } else if (item.data.inning === 2) {
            topTwo += item.data.runs
          } else if (item.data.inning === 3) {
            topThree += item.data.runs
          } else if (item.data.inning === 4) {
            topFour += item.data.runs
          } else if (item.data.inning === 5) {
            topFive += item.data.runs
          } else if (item.data.inning === 6) {
            topSix += item.data.runs
          } else if (item.data.inning === 7) {
            topSeven += item.data.runs
          } else if (item.data.inning === 8) {
            topEight += item.data.runs
          } else if (item.data.inning === 9) {
            topNine += item.data.runs
          } else if (item.data.inning === 10) {
            topTen += item.data.runs
          } else if (item.data.inning === 11) {
            topEleven += item.data.runs
          } else if (item.data.inning === 12) {
            topTwelve += item.data.runs
          } else if (item.data.inning === 13) {
            topThirteen += item.data.runs
          } else if (item.data.inning === 14) {
            topFourteen += item.data.runs
          } else if (item.data.inning === 15) {
            topFifteen += item.data.runs
          } else if (item.data.inning === 16) {
            topSixteen += item.data.runs
          } else if (item.data.inning === 17) {
            topSeventeen += item.data.runs
          } else if (item.data.inning === 18) {
            topEighteen += item.data.runs
          }
        } else if (item.data.inninghalf === 'BOT'){
          homeRuns += item.data.runs
          homeErrors += item.data.def_error
          if (item.data.outcome === 'Hit') {
            homeHits += 1
          }
          if (item.data.inning === 1) {
            botOne += item.data.runs
          } else if (item.data.inning === 2) {
            botTwo += item.data.runs
          } else if (item.data.inning === 3) {
            botThree += item.data.runs
          } else if (item.data.inning === 4) {
            botFour += item.data.runs
          } else if (item.data.inning === 5) {
            botFive += item.data.runs
          } else if (item.data.inning === 6) {
            botSix += item.data.runs
          } else if (item.data.inning === 7) {
            botSeven += item.data.runs
          } else if (item.data.inning === 8) {
            botEight += item.data.runs
          } else if (item.data.inning === 9) {
            botNine += item.data.runs
          } else if (item.data.inning === 10) {
            botTen += item.data.runs
          } else if (item.data.inning === 11) {
            botEleven += item.data.runs
          } else if (item.data.inning === 12) {
            botTwelve += item.data.runs
          } else if (item.data.inning === 13) {
            botThirteen += item.data.runs
          } else if (item.data.inning === 14) {
            botFourteen += item.data.runs
          } else if (item.data.inning === 15) {
            botFifteen += item.data.runs
          } else if (item.data.inning === 16) {
            botSixteen += item.data.runs
          } else if (item.data.inning === 17) {
            botSeventeen += item.data.runs
          } else if (item.data.inning === 18) {
            botEighteen += item.data.runs
          }
        }
      })
      game.set('awayRuns', awayRuns)
      game.set('homeRuns', homeRuns)
      game.set('awayHits', awayHits)
      game.set('homeHits', homeHits)
      game.set('awayErrors', awayErrors)
      game.set('homeErrors', homeErrors)
      game.set('topOne', topOne)
      game.set('botOne', botOne)
      game.set('topTwo', topTwo)
      game.set('botTwo', botTwo)
      game.set('topThree', topThree)
      game.set('botThree', botThree)
      game.set('topFour', topFour)
      game.set('botFour', botFour)
      game.set('topFive', topFive)
      game.set('botFive', botFive)
      game.set('topSix', topSix)
      game.set('botSix', botSix)
      game.set('topSeven', topSeven)
      game.set('botSeven', botSeven)
      game.set('topEight', topEight)
      game.set('botEight', botEight)
      game.set('topNine', topNine)
      game.set('botNine', botNine)
      game.set('topTen', topTen)
      game.set('botTen', botTen)
      game.set('topEleven', topEleven)
      game.set('botEleven', botEleven)
      game.set('topTwelve', topTwelve)
      game.set('botTwelve', botTwelve)
      game.set('topThirteen', topThirteen)
      game.set('botThirteen', botThirteen)
      game.set('topFourteen', topFourteen)
      game.set('botFourteen', botFourteen)
      game.set('topFifteen', topFifteen)
      game.set('botFifteen', botFifteen)
      game.set('topSixteen', topSixteen)
      game.set('botSixteen', botSixteen)
      game.set('topSeventeen', topSeventeen)
      game.set('botSeventeen', botSeventeen)
      game.set('topEighteen', topEighteen)
      game.set('botEighteen', botEighteen)
      game.set('totalInnings', totalInnings)
    },
    createPlateappearance(plateappearance) {
      const scope = this
      let newPlateappearance = this.get('store').createRecord('plateappearance', plateappearance)
      newPlateappearance.save()
      Ember.run.later((function() {
        scope.send('updateScores')
      }), 500)
    },
    deletePlateappearance (plateappearance) {
      const scope = this
      plateappearance.destroyRecord()
      Ember.run.later((function() {
        scope.send('updateScores')
      }), 500)
    },
    createGame(game) {
      // Ember.set(game, 'home', JSON.stringify(game.home))
      // Ember.set(game, 'away', JSON.stringify(game.away))
      let newGame = this.get('store').createRecord('game', game)
      newGame.save()
    },
    deleteGame(game) {
      game.destroyRecord()
      this.transitionTo('games')
    }
  }
});
