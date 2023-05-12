const contiguousSum = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('contiguousSum'), () => {
  if (functionNotExists(contiguousSum)) {
    functionNotExistsMsg('contiguousSum');
    return;
  }

  expect(contiguousSum([1, 4, 7, 2, 8, 9], 3))
    .toBe(19);

  expect(contiguousSum([1, 4, 7, 2, 8, 9], 5))
    .toBe(30);

  expect(contiguousSum([9, 8, 2, 7, 4, 1], 3))
    .toBe(19);

  expect(contiguousSum([1, 4, 7], 3))
    .toBe(12);
});
