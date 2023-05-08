const findFirstDuplicate = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findFirstDuplicate'),() => {
  if (functionNotExists(findFirstDuplicate)) {
    functionNotExistsMsg('findFirstDuplicate');
    return;
  }

  expect(findFirstDuplicate([1,2,3,4,5,0,2,4,6]))
    .toBe(2);
});
