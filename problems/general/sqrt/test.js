const sqrt = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('sqrt'), () => {
  if (functionNotExists(sqrt)) {
    functionNotExistsMsg('sqrt');
    return;
  }

  expect(sqrt(4))
    .toBe(2);

  expect(sqrt(8))
    .toBe(2);

  expect(sqrt(25))
    .toBe(5);

  expect(sqrt(200))
    .toBe(14);

  expect(sqrt(17))
    .toBe(4);
});
