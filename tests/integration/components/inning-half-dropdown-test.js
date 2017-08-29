import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('inning-half-dropdown', 'Integration | Component | inning half dropdown', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{inning-half-dropdown}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#inning-half-dropdown}}
      template block text
    {{/inning-half-dropdown}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
