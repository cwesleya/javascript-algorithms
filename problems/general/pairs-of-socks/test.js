const pairsOfSocks = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('pairsOfSocks'), () => {
  if (functionNotExists(pairsOfSocks)) {
    functionNotExistsMsg('pairsOfSocks');
    return;
  }

  expect(pairsOfSocks([1, 10, 25, 25, 10, 25]))
    .toBe(2);

  expect(pairsOfSocks([1, 5, 5, 10, 20, 20, 10, 10, 5, 10, 5, 5, 5, 1]))
    .toBe(7);
});
