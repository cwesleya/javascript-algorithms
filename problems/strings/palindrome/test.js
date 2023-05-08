const isPalindrome = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('isPalindrome'), () => {
  if (functionNotExists(isPalindrome)) {
    functionNotExistsMsg('isPalindrome');
    return;
  }

  expect(isPalindrome('abcba'))
    .toBe(true);

  expect(isPalindrome('bananab'))
    .toBe(true);

  expect(isPalindrome('minimim'))
    .toBe(false);

  expect(isPalindrome('ab'))
    .toBe(false);

  expect(isPalindrome('a'))
    .toBe(true);

  expect(isPalindrome('aa'))
    .toBe(true);

  expect(isPalindrome('abc'))
    .toBe(false);

  expect(isPalindrome('aba'))
    .toBe(true);
});
