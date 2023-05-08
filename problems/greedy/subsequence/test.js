const isSubsequence = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('isSubsequence'), () => {
  if (functionNotExists(isSubsequence)) {
    functionNotExistsMsg('isSubsequence');
    return;
  }

  expect(isSubsequence('zhb', 'zhbgdc'))
    .toBe(true);

  expect(isSubsequence('axq', 'ahbgdq'))
    .toBe(false);
});
