const stringContainsOnlyDigits = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('stringContainsOnlyDigits'), () => {
  if (functionNotExists(stringContainsOnlyDigits)) {
    functionNotExistsMsg('stringContainsOnlyDigits');
    return;
  }

  expect(stringContainsOnlyDigits('123456789a'))
    .toBe(false);

  expect(stringContainsOnlyDigits('12345678910'))
    .toBe(true);

  expect(stringContainsOnlyDigits('abc'))
    .toBe(false);

  expect(stringContainsOnlyDigits(''))
    .toBe(false);
});
