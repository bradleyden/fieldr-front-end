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
    }), 500)
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
      const plateappearanceArray = game.get('plateappearances').toArray()
      plateappearanceArray.forEach(function(item) {
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
    }
  }
});
