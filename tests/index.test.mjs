import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('wraps before overflowing', () => {
  assert.deepEqual(api.wrapText('one two three', 7), ['one two', 'three']);
});
test('keeps long words intact', () => {
  assert.deepEqual(api.wrapText('abcdefgh x', 3), ['abcdefgh', 'x']);
});
test('collapses whitespace', () => {
  assert.deepEqual(api.wrapText(' a   b ', 5), ['a b']);
});
test('handles empty input', () => {
  assert.deepEqual(api.wrapText('  ', 4), []);
});
test('counts supplementary code points', () => {
  assert.deepEqual(api.wrapText('😀 😀', 2), ['😀', '😀']);
});
test('rejects zero width', () => {
  assert.throws(() => api.wrapText('x', 0), RangeError);
});
