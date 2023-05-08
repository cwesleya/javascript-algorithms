const findLowMax = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findLowMax'), () => {
  if (functionNotExists(findLowMax)) {
    functionNotExistsMsg('findLowMax');
    return;
  }

  expect(findLowMax([100, 98, 3, 7, 8, 9]))
    .toEqual([3, 100]);

  expect(findLowMax([100, -98, 3, 7, 8, 9]))
    .toEqual([-98, 100]);

  expect(findLowMax([]))
    .toEqual([]);
});
