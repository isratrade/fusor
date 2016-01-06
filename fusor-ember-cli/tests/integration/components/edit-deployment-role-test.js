import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-deployment-role', 'Integration | Component | edit deployment role', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-deployment-role}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-deployment-role}}
      template block text
    {{/edit-deployment-role}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
