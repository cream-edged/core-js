import globalThis from 'core-js-pure/es/global-this';

QUnit.test('globalThis', assert => {
  assert.same(globalThis, Object(globalThis), 'is object');
  assert.same(globalThis.Math, Math, 'contains globals');
});
