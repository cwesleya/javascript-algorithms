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

  expect(longestWord(sentence))
    .toBe('sentence');
});
