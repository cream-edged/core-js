import MIN_SAFE_INTEGER from 'core-js-pure/es/number/min-safe-integer';

QUnit.test('Number.MIN_SAFE_INTEGER', assert => {
  assert.same(MIN_SAFE_INTEGER, -(2 ** 53) + 1, 'Is -2^53 + 1');
});
