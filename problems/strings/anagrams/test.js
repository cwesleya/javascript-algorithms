const anagrams = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('anagrams'), () => {
  if (functionNotExists(anagrams)) {
    functionNotExistsMsg('anagrams');
    return;
  }

  expect(anagrams('afc', 'acf'))
    .toBe(true);

  expect(anagrams('', ' '))
    .toBe(false);

  expect(anagrams('baaa', 'bbaa'))
    .toBe(false);

  expect(anagrams('banana', 'bananas'))
    .toBe(false);

  expect(anagrams('', ''))
    .toBe(true);

  expect(anagrams('hex', 'hey'))
    .toBe(false);
});
