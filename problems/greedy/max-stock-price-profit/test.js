const maxProfit = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('maxProfit'), () => {
  if (functionNotExists(maxProfit)) {
    functionNotExistsMsg('maxProfit');
    return;
  }

  expect(maxProfit([10, 7, 5, 8, 11, 2, 6]))
    .toBe(6);

  expect(maxProfit([10, 7, 5, 8, 11, 2, 60]))
    .toBe(58);

  expect(maxProfit([10, 700, 5, 8, 11, 2, 60]))
    .toBe(690);

  expect(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
    .toBe(0);

  expect(maxProfit([10, 9, 8, 7, 6, 5, 4, 3, 2, 1].reverse()))
    .toBe(9);

  expect(maxProfit([7, 1, 5, 3, 6, 4]))
    .toBe(5);

  expect(maxProfit([7, 6, 4, 3, 1]))
    .toBe(0);
});
