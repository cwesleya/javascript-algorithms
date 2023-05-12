const isPrime = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('isPrime'), () => {
  if (functionNotExists(isPrime)) {
    functionNotExistsMsg('isPrime');
    return;
  }

  expect(isPrime(100))
    .toBe(false);

  expect(isPrime(101))
    .toBe(true);

  expect(isPrime(5))
    .toBe(true);

  expect(isPrime(225))
    .toBe(false);

  expect(isPrime(17))
    .toBe(true);
});
