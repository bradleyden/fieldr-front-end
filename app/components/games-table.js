import Ember from 'ember';

export default Ember.Component.extend({
  // defines the column names and properties for the sort/filter table on the games
  // rotue
  gameColumns: [
  {
    "propertyName": "date",
    "title": "Date",
    "routeName": "game",
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
// Overrides the default icons from glyphicon to fontawesome
icons: Ember.Object.create({
  "sort-asc": "fa fa-sort-asc",
  "sort-desc": "fa fa-sort-desc",
  "column-visible": "fa fa-check",
  "column-hidden": "fa fa-unchecked",
  "nav-first": "fa fa-chevron-left",
  "nav-prev": "fa fa-menu-left",
  "nav-next": "fa fa-menu-right",
  "nav-last": "fa fa-chevron-right",
  "caret": "caret",
  "expand-row": "fa fa-plus",
  "expand-all-rows": "fa fa-plus",
  "collapse-row": "fa fa-minus",
  "collapse-all-rows": "fa fa-minus",
  "select-all-rows": "fa fa-check",
  "deselect-all-rows": "fa fa-unchecked",
  "select-row": "fa fa-check",
  "deselect-row": "fa fa-unchecked"
})
});
