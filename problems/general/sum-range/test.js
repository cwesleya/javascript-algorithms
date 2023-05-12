const sumRange = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('sumRange'), () => {
  if (functionNotExists(sumRange)) {
    functionNotExistsMsg('sumRange');
    return;
  }

  expect(sumRange(0, 100))
    .toBe(5050);

  expect(sumRange(1, 100))
    .toBe(5050);

  expect(sumRange(5, 100))
    .toBe(5040);
});
