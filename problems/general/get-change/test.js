const getChange = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('getChange'), () => {
  if (functionNotExists(getChange)) {
    functionNotExistsMsg('getChange');
    return;
  }

  expect(getChange(1.23))
    .toBe(9);

  expect(getChange(1.24))
    .toBe(10);
  
  expect(getChange(5))
    .toBe(20);
});
