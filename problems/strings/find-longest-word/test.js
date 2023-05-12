const longestWord = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('longestWord'), () => {
  if (functionNotExists(longestWord)) {
    functionNotExistsMsg('longestWord');
    return;
  }

  const sentence = 'In this   sentence it is not obvious which is the longest word.';
  const test = 'Punctuation - If there are two or more words that are the same length, return the first word with that length. Ignore punctuation.';

  expect(longestWord(sentence))
    .toBe('sentence');

  expect(longestWord(test))
    .toBe('Punctuation');
});
