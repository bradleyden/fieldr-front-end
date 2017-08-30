import Ember from 'ember';

const noeq = (params) => params[0] === params[1];

export default Ember.Helper.helper(noeq);
