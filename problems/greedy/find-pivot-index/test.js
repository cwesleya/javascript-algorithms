const findPivotIndex = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findPivotIndex'), () => {
  if (functionNotExists(findPivotIndex)) {
    functionNotExistsMsg('findPivotIndex');
    return;
  }

  expect(findPivotIndex([1, 7, 3, 6, 5, 6]))
    .toBe(3);

  expect(findPivotIndex([3, 2, 1]))
    .toBe(-1);

  expect(findPivotIndex([2, 1, -1]))
    .toBe(0);
});
