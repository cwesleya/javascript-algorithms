const mergeOrderedLists = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('mergeOrderedLists'), () => {
  if (functionNotExists(mergeOrderedLists)) {
    functionNotExistsMsg('mergeOrderedLists');
    return;
  }

  expect(mergeOrderedLists([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 12, 390]))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 390]);
});
