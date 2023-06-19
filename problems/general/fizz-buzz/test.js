const fizzBuzz = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('fizzBuzz'), () => {
  if (functionNotExists(fizzBuzz)) {
    functionNotExistsMsg('fizzBuzz');
    return;
  }

  const result = `123fizz45buzz6fizz789fizz10buzz1112fizz
    131415fizzbuzz161718fizz1920buzz21fizz222324fizz25buzz
    2627fizz282930fizzbuzz313233fizz3435buzz36fizz373839fizz
    40buzz4142fizz434445fizzbuzz464748fizz4950buzz51fizz5253
    54fizz55buzz5657fizz585960fizzbuzz616263fizz6465buzz66fizz
    676869fizz70buzz7172fizz737475fizzbuzz767778fizz7980buzz
    81fizz828384fizz85buzz8687fizz888990fizzbuzz919293fizz94
    95buzz96fizz979899fizz100buzz`.replace(/\s\s+/g, '');

  expect(fizzBuzz(100))
    .toBe(result);
});

