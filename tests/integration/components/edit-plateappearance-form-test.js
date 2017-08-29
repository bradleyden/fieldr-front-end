import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-plateappearance-form', 'Integration | Component | edit plateappearance form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-plateappearance-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-plateappearance-form}}
      template block text
    {{/edit-plateappearance-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
