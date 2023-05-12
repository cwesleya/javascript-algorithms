const maxPairProduct = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('maxPairProduct'), () => {
  if (functionNotExists(maxPairProduct)) {
    functionNotExistsMsg('maxPairProduct');
    return;
  }

  expect(maxPairProduct([100, 98, 3, 7, 8, 9]))
    .toBe(9800);

  expect(maxPairProduct([100, -98, 3, 7, 8, -90]))
    .toBe(8820);

  expect(maxPairProduct([-1, 3]))
    .toBe(-3);

  expect(maxPairProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    .toBe(90);
});
