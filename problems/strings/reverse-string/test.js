const reverseString = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('reverseString'),() => {
  if (functionNotExists(reverseString)) {
    functionNotExistsMsg('reverseString');
    return;
  }

  expect(reverseString('maxi'))
    .toBe('ixam');
  
  expect(reverseString('amgod'))
    .toBe('dogma');
  
  expect(reverseString('Hello, world!'))
    .toBe('!dlrow ,olleH');
});
