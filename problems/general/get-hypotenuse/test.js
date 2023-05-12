const getHypotenuse = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('getHypotenuse'), () => {
  if (functionNotExists(getHypotenuse)) {
    functionNotExistsMsg('getHypotenuse');
    return;
  }

  expect(getHypotenuse(3,4))
    .toBe(5);

  expect(getHypotenuse(0,3))
    .toBe(0);

  expect(getHypotenuse(2,0))
    .toBe(0);
});
