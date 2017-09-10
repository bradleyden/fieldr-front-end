import Ember from 'ember';

export default Ember.Component.extend({
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
