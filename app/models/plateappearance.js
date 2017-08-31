import DS from 'ember-data';

export default DS.Model.extend({
  inninghalf: DS.attr('string'),
  inning: DS.attr('number'),
  batter: DS.attr('number'),
  pitcher: DS.attr('number'),
  runs: DS.attr('number'),
  outs: DS.attr('number'),
  def_error: DS.attr('number'),
  outcome: DS.attr('string'),
  firstbase: DS.attr('boolean'),
  secondbase: DS.attr('boolean'),
  thirdbase: DS.attr('boolean'),
  homebase: DS.attr('boolean'),
  firstbasemandefense: DS.attr('boolean'),
  secondbasemandefense: DS.attr('boolean'),
  thirdbasemandefense: DS.attr('boolean'),
  shortstopdefense: DS.attr('boolean'),
  leftfielderdefense: DS.attr('boolean'),
  centerfielderdefense: DS.attr('boolean'),
  rightfielderdefense: DS.attr('boolean'),
  shortstopdefense: DS.attr('boolean'),
  pitcherdefense: DS.attr('boolean'),
  catcherdefense: DS.attr('boolean'),
  homer: DS.attr('boolean'),
  game: DS.belongsTo('game')
});
