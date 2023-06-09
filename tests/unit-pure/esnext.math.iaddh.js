import iaddh from 'core-js-pure/full/math/iaddh';

QUnit.test('Math.iaddh', assert => {
  assert.isFunction(iaddh);
  assert.arity(iaddh, 4);
  assert.same(iaddh(0, 2, 1, 0), 2);
  assert.same(iaddh(0, 4, 1, 1), 5);
  assert.same(iaddh(2, 4, 1, 1), 5);
  assert.same(iaddh(0xFFFFFFFF, 4, 1, 1), 6);
  assert.same(iaddh(1, 4, 0xFFFFFFFF, 1), 6);
});
