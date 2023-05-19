const capitalization = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('capitalization'), () => {
  if (functionNotExists(capitalization)) {
    functionNotExistsMsg('capitalization');
    return;
  }

  expect(capitalization('this is the string i am testing.'))
    .toBe('This Is The String I Am Testing.');

  expect(capitalization('f'))
    .toBe('F');

  expect(capitalization('  f '))
    .toBe('F');

  expect(capitalization(''))
    .toBe('');

  expect(capitalization(' '))
    .toBe('');

  expect(capitalization('oh yea... i love you, baby!'))
    .toBe('Oh Yea... I Love You, Baby!');

  expect(capitalization('i love to code!'))
    .toBe('I Love To Code!');
});
