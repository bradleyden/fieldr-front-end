import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const currentGame = this.get('store').findRecord('game', params.game_id);
    return currentGame.then(function() {
      if (currentGame.get('totalInnings') <= 9) {
        return {
          home: currentGame.get('home'),
          away: currentGame.get('away'),
          id: currentGame.get('id'),
          donutChartHome: {
            labels: ['Hits', 'Errors', 'Runs'],
            datasets: [{
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.1)', 'rgba(0, 0, 255, 1)'],
              data: [currentGame.get('homeHits'),
                     currentGame.get('awayErrors'),
                     currentGame.get('homeRuns')]
            }]
          },
          donutChartAway: {
            labels: ['Hits', 'Errors', 'Runs'],
            datasets: [{
              backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.1)', 'rgba(255, 0, 0, 1)'],
              data: [currentGame.get('awayHits'),
                     currentGame.get('homeErrors'),
                     currentGame.get('awayRuns')]
            }]
          },
          radarChart: {
            labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'],
            datasets: [{
                lineTension: .2,
                label: currentGame.get('home'),
                borderColor: 'rgba(0, 0, 255, 0)',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                pointBackgroundColor: 'rgba(0, 0, 255, 0.5)',
                pointRadius: 8,
                pointHoverBackgroundColor: 'rgba(0, 0, 255, 0.9)',
                pointHoverRadius: 12,
                data: [currentGame.get('botOne'),
                       currentGame.get('botTwo'),
                       currentGame.get('botThree'),
                       currentGame.get('botFour'),
                       currentGame.get('botFive'),
                       currentGame.get('botSix'),
                       currentGame.get('botSeven'),
                       currentGame.get('botEight'),
                       currentGame.get('botNine')],
              },
              {
                lineTension: .2,
                label: currentGame.get('away'),
                borderColor: 'rgba(255, 0, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                pointBackgroundColor: 'rgba(255, 0, 0, 0.5)',
                pointRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 0, 0, 0.9)',
                pointHoverRadius: 12,
                data: [currentGame.get('topOne'),
                       currentGame.get('topTwo'),
                       currentGame.get('topThree'),
                       currentGame.get('topFour'),
                       currentGame.get('topFive'),
                       currentGame.get('topSix'),
                       currentGame.get('topSeven'),
                       currentGame.get('topEight'),
                       currentGame.get('topNine')]
            }]
          }
        }
      } else {
        return {
          home: currentGame.get('home'),
          away: currentGame.get('away'),
          id: currentGame.get('id'),
          donutChartHome: {
            labels: ['Hits', 'Errors', 'Runs'],
            datasets: [{
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.1)', 'rgba(0, 0, 255, 1)'],
              data: [currentGame.get('homeHits'),
                     currentGame.get('awayErrors'),
                     currentGame.get('homeRuns')]
            }]
          },
          donutChartAway: {
            labels: ['Hits', 'Errors', 'Runs'],
            datasets: [{
              backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.1)', 'rgba(255, 0, 0, 1)'],
              data: [currentGame.get('awayHits'),
                     currentGame.get('homeErrors'),
                     currentGame.get('awayRuns')]
            }]
          },
          radarChart: {
            labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th'],
            datasets: [{
                lineTension: .2,
                label: currentGame.get('home'),
                borderColor: 'rgba(0, 0, 255, 0)',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                pointBackgroundColor: 'rgba(0, 0, 255, 0.5)',
                pointRadius: 8,
                pointHoverBackgroundColor: 'rgba(0, 0, 255, 0.9)',
                pointHoverRadius: 12,
                data: [currentGame.get('botOne'),
                       currentGame.get('botTwo'),
                       currentGame.get('botThree'),
                       currentGame.get('botFour'),
                       currentGame.get('botFive'),
                       currentGame.get('botSix'),
                       currentGame.get('botSeven'),
                       currentGame.get('botEight'),
                       currentGame.get('botNine'),
                       currentGame.get('botTen'),
                       currentGame.get('botEleven'),
                       currentGame.get('botTwelve'),
                       currentGame.get('botThirteen'),
                       currentGame.get('botFourteen'),
                       currentGame.get('botFifteen'),
                       currentGame.get('botSixteen'),
                       currentGame.get('botSeventeen'),
                       currentGame.get('botEighteen')]
              },
              {
                lineTension: .2,
                label: currentGame.get('away'),
                borderColor: 'rgba(255, 0, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                pointBackgroundColor: 'rgba(255, 0, 0, 0.5)',
                pointRadius: 8,
                pointHoverBackgroundColor: 'rgba(255, 0, 0, 0.9)',
                pointHoverRadius: 12,
                data: [currentGame.get('topOne'),
                       currentGame.get('topTwo'),
                       currentGame.get('topThree'),
                       currentGame.get('topFour'),
                       currentGame.get('topFive'),
                       currentGame.get('topSix'),
                       currentGame.get('topSeven'),
                       currentGame.get('topEight'),
                       currentGame.get('topNine'),
                       currentGame.get('topTen'),
                       currentGame.get('topEleven'),
                       currentGame.get('topTwelve'),
                       currentGame.get('topThirteen'),
                       currentGame.get('topFourteen'),
                       currentGame.get('topFifteen'),
                       currentGame.get('topSixteen'),
                       currentGame.get('topSeventeen'),
                       currentGame.get('topEighteen')]
            }]
          }
        }
      }
    })
    }
});
