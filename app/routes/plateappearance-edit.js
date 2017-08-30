import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('plateappearance', params.plateappearance_id)
  },
  actions: {
    // updateScores(pa) {
    //   const game = pa
    //   console.log(game)
    //   let awayRuns = 0
    //   let homeRuns = 0
    //   let awayHits = 0
    //   let homeHits = 0
    //   let awayErrors = 0
    //   let homeErrors = 0
    //   const plateappearanceArray = game.get('plateappearances').toArray()
    //   plateappearanceArray.forEach(function(item) {
    //     if (item.data.inninghalf === 'TOP') {
    //       awayRuns += item.data.runs
    //       awayErrors += item.data.def_error
    //       if (item.data.outcome === 'Hit') {
    //         awayHits += 1
    //       }
    //     } else if (item.data.inninghalf === 'BOT'){
    //       homeRuns += item.data.runs
    //       homeErrors += item.data.def_error
    //       if (item.data.outcome === 'Hit') {
    //         homeHits += 1
    //       }
    //     }
    //   })
    //   game.set('awayRuns', awayRuns)
    //   game.set('homeRuns', homeRuns)
    //   game.set('awayHits', awayHits)
    //   game.set('homeHits', homeHits)
    //   game.set('awayErrors', awayErrors)
    //   game.set('homeErrors', homeErrors)
    // },
    editPlateappearance(plateappearance) {
      const scope = this
      plateappearance.save()
      // Ember.run.later((function(pa) {
      //   scope.send('updateScores', pa)
      // }), 500)
    }
  }
});
