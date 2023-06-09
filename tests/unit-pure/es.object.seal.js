import ownKeys from 'core-js-pure/es/reflect/own-keys';
import keys from 'core-js-pure/es/object/keys';
import getOwnPropertyNames from 'core-js-pure/es/object/get-own-property-names';
import getOwnPropertySymbols from 'core-js-pure/es/object/get-own-property-symbols';
import seal from 'core-js-pure/es/object/seal';

QUnit.test('Object.seal', assert => {
  assert.isFunction(seal);
  assert.arity(seal, 1);
  const data = [42, 'foo', false, null, undefined, {}];
  for (const value of data) {
    assert.notThrows(() => seal(value) || true, `accept ${ {}.toString.call(value).slice(8, -1) }`);
    assert.same(seal(value), value, `returns target on ${ {}.toString.call(value).slice(8, -1) }`);
  }
  const results = [];
  for (const key in seal({})) results.push(key);
  assert.arrayEqual(results, []);
  assert.arrayEqual(keys(seal({})), []);
  assert.arrayEqual(getOwnPropertyNames(seal({})), []);
  assert.arrayEqual(getOwnPropertySymbols(seal({})), []);
  assert.arrayEqual(ownKeys(seal({})), []);
});
