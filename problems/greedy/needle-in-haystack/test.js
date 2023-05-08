const findNeedleInHaystack = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findNeedleInHaystack'), () => {
  if (functionNotExists(findNeedleInHaystack)) {
    functionNotExistsMsg('findNeedleInHaystack');
    return;
  }

  expect(findNeedleInHaystack('est', 'testcode'))
    .toBe(true);

  expect(findNeedleInHaystack(' ma', 'bewildered man'))
    .toBe(true);

  expect(findNeedleInHaystack('lkbetr', 'ekrjbgnlkbetr gnm'))
    .toBe(true);

  expect(findNeedleInHaystack('lkbetz', 'ekrjbgnlkbetr gnm'))
    .toBe(false);
});
