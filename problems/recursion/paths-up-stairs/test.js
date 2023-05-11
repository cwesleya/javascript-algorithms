const pathsUpStairs = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('pathsUpStairs'), () => {
  if (functionNotExists(pathsUpStairs)) {
    functionNotExistsMsg('pathsUpStairs');
    return;
  }

  expect(pathsUpStairs(11))
    .toBe(504);

  expect(pathsUpStairs(45))
    .toBe(501774317241);
});
