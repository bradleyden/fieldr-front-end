import Ember from 'ember';

const grthan = (params) => params[0] > params[1];

export default Ember.Helper.helper(grthan);
