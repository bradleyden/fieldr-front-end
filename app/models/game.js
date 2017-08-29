import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  home: DS.attr('string'),
  away: DS.attr('string'),
  plateappearances: DS.hasMany('plateappearance')
});
