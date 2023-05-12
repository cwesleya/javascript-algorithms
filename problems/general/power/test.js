const power = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('power'), () => {
  if (functionNotExists(power)) {
    functionNotExistsMsg('power');
    return;
  }

  expect(power(2, 32))
    .toBe(true);

  expect(power(8, 100))
    .toBe(false);
});
