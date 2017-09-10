import Ember from 'ember';

export default Ember.Component.extend({
  gameColumns: [
  {
    "propertyName": "date",
    "title": "Date",
    "routeName": "game"
  },
  {
    "propertyName": "home",
    "title": "Home Team",
    "routeName": "game"
  },
  {
    "propertyName": "away",
    "title": "Away Team",
    "routeName": "game"
  }
],
icons: Ember.Object.create({
  "sort-asc": "fa fa-sort-asc",
  "sort-desc": "fa fa-sort-desc",
  "column-visible": "glyphicon glyphicon-check",
  "column-hidden": "glyphicon glyphicon-unchecked",
  "nav-first": "glyphicon glyphicon-chevron-left",
  "nav-prev": "glyphicon glyphicon-menu-left",
  "nav-next": "glyphicon glyphicon-menu-right",
  "nav-last": "glyphicon glyphicon-chevron-right",
  "caret": "caret",
  "expand-row": "glyphicon glyphicon-plus",
  "expand-all-rows": "glyphicon glyphicon-plus",
  "collapse-row": "glyphicon glyphicon-minus",
  "collapse-all-rows": "glyphicon glyphicon-minus",
  "select-all-rows": "glyphicon glyphicon-check",
  "deselect-all-rows": "glyphicon glyphicon-unchecked",
  "select-row": "glyphicon glyphicon-check",
  "deselect-row": "glyphicon glyphicon-unchecked"
})
});
