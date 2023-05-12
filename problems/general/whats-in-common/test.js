const whatsInCommon = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('whatsInCommon'), () => {
  if (functionNotExists(whatsInCommon)) {
    functionNotExistsMsg('whatsInCommon');
    return;
  }


  const array1 = [13, 27, 35, 40, 49, 55, 59, 60];
  const array2 = [17, 35, 39, 40, 55, 58, 60];

  expect(whatsInCommon([1, 2, 3], [1, 2, 3, 4, 5]))
    .toEqual([1, 2, 3]);

  expect(whatsInCommon(array1, array2))
    .toEqual([35, 40, 55, 60]);
});
