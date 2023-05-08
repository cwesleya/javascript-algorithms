const findFirstNoneDuplicate = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findFirstNoneDuplicate'),() => {
  if (functionNotExists(findFirstNoneDuplicate)) {
    functionNotExistsMsg('findFirstNoneDuplicate');
    return;
  }

  expect(findFirstNoneDuplicate('minimum'))
    .toBe('n');
});
