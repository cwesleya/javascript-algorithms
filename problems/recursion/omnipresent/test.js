const isOmnipresent = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('isOmnipresent'), () => {
  if (functionNotExists(isOmnipresent)) {
    functionNotExistsMsg('isOmnipresent');
    return;
  }

  expect(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
    .toBe(true);

  expect(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))
    .toBe(false);

  expect(isOmnipresent([[5], [5], [5], [6, 5]], 5))
    .toBe(true);

  expect(isOmnipresent([[5], [5], [5], [6, 5]], 6))
    .toBe(false);

  expect(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1))
    .toBe(true);
});
