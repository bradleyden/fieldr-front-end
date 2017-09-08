import Ember from 'ember';

const lsthan = (params) => params[0] < params[1];

export default Ember.Helper.helper(lsthan);
