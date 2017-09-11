import Ember from 'ember';

export default Ember.Route.extend({
  // This route is part of the template and has no use in the application
  model () {
    return this.get('store').findAll('user');
  },
});
