import Ember from 'ember';

const and = (params) => params[0] && params[1];

export default Ember.Helper.helper(and);
