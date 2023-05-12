const reverseArray = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('reverseArray'), () => {
  if (functionNotExists(reverseArray)) {
    functionNotExistsMsg('reverseArray');
    return;
  }

  expect(reverseArray([1, 3, 5, 7, 9]))
    .toEqual([9, 7, 5, 3, 1]);

  expect(reverseArray([0]))
    .toEqual([0]);
});
