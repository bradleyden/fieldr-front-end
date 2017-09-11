import Ember from 'ember';

export default Ember.Component.extend({
  // options for the radar chart component from chart.js
  options: {
    animation: {
      easing: 'easeOutBack',
      duration: 200
    },
    legend: {
      labels: {
        fontSize: 24
      }
    },
    responsive: true,
    scale: {
      gridLines: {
        color: 'rgba(39,63,51,1)'
      },
      pointLabels: {
        fontSize: 20
      },
      ticks: {
        min: -1,
        stepSize: 1
      }
    }
  }
});
