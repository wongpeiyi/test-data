import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | store', function (hooks) {
  setupTest(hooks);

  test('has custom method', function (assert) {
    let service = this.owner.lookup('service:store');

    assert.ok(typeof service.customPeek !== 'undefined');
    assert.ok(service.customPeek());
  });
});
