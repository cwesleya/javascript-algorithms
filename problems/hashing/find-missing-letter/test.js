const findMissingLetter = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('findMissingLetter'),() => {
  if (functionNotExists(findMissingLetter)) {
    functionNotExistsMsg('findMissingLetter');
    return;
  }
  
  expect(findMissingLetter('the quick brown box jumps over the lazy dog'))
    .toBe('f');
});
