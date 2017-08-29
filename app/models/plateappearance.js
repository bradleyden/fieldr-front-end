import DS from 'ember-data';

export default DS.Model.extend({
  inning: DS.attr('number'),
  batter: DS.attr('number'),
  pitcher: DS.attr('number'),
  runs: DS.attr('number'),
  outs: DS.attr('number'),
  def_error: DS.attr('number'),
  outcome: DS.attr('string'),
  game: DS.belongsTo('game')
});
