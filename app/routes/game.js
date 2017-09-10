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
      game.then(function() {
        game.get('content').set('awayRuns', awayRuns)
        game.get('content').set('homeRuns', homeRuns)
        game.get('content').set('awayHits', awayHits)
        game.get('content').set('homeHits', homeHits)
        game.get('content').set('awayErrors', awayErrors)
        game.get('content').set('homeErrors', homeErrors)
        game.get('content').set('topOne', topOne)
        game.get('content').set('botOne', botOne)
        game.get('content').set('topTwo', topTwo)
        game.get('content').set('botTwo', botTwo)
        game.get('content').set('topThree', topThree)
        game.get('content').set('botThree', botThree)
        game.get('content').set('topFour', topFour)
        game.get('content').set('botFour', botFour)
        game.get('content').set('topFive', topFive)
        game.get('content').set('botFive', botFive)
        game.get('content').set('topSix', topSix)
        game.get('content').set('botSix', botSix)
        game.get('content').set('topSeven', topSeven)
        game.get('content').set('botSeven', botSeven)
        game.get('content').set('topEight', topEight)
        game.get('content').set('botEight', botEight)
        game.get('content').set('topNine', topNine)
        game.get('content').set('botNine', botNine)
        game.get('content').set('topTen', topTen)
        game.get('content').set('botTen', botTen)
        game.get('content').set('topEleven', topEleven)
        game.get('content').set('botEleven', botEleven)
        game.get('content').set('topTwelve', topTwelve)
        game.get('content').set('botTwelve', botTwelve)
        game.get('content').set('topThirteen', topThirteen)
        game.get('content').set('botThirteen', botThirteen)
        game.get('content').set('topFourteen', topFourteen)
        game.get('content').set('botFourteen', botFourteen)
        game.get('content').set('topFifteen', topFifteen)
        game.get('content').set('botFifteen', botFifteen)
        game.get('content').set('topSixteen', topSixteen)
        game.get('content').set('botSixteen', botSixteen)
        game.get('content').set('topSeventeen', topSeventeen)
        game.get('content').set('botSeventeen', botSeventeen)
        game.get('content').set('topEighteen', topEighteen)
        game.get('content').set('botEighteen', botEighteen)
        game.get('content').set('totalInnings', totalInnings)
        game.get('content').save()
      })
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
    },
    transitionToChart(game) {
      this.transitionTo('game-charts', game.id)
    }
  }
});
