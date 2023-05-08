const findTwoSum = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findTwoSum'), () => {
  if (functionNotExists(findTwoSum)) {
    functionNotExistsMsg('findTwoSum');
    return;
  }

  expect(findTwoSum([1, 2, 3, 4, 5], 6))
    .toEqual([1, 3]);

  expect(findTwoSum([8, 9, 10, 11, 12, 13, 14, 15, 16, 100], 108))
    .toEqual([0, 9]);
});
