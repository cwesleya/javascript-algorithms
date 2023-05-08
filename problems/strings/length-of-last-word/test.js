const lengthOfLastWord = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('lengthOfLastWord'), () => {
  if (functionNotExists(lengthOfLastWord)) {
    functionNotExistsMsg('lengthOfLastWord');
    return;
  }

  expect(lengthOfLastWord('length of last  word  '))
    .toBe(4);

  expect(lengthOfLastWord('  length  '))
    .toBe(6);
});
