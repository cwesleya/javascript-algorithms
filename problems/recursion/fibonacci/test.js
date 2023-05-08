const fib = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('fib'),() => {
  if (functionNotExists(fib)) {
    functionNotExistsMsg('fib');
    return;
  }
  
  expect(fib(15))
    .toBe(610);
});
