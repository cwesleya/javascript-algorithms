const foodLines = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('foodLines'),() => {
  if (functionNotExists(foodLines)) {
    functionNotExistsMsg('foodLines');
    return;
  }

  expect(foodLines([3,2,5],4))
    .toEqual([5,4,5]);

  expect(foodLines([2,2,3,3,3],3))
    .toEqual([4,3,3,3,3]);

  const bigTestArr = [
    46,38,15,23,56,71,28,8,35,51,45,83,78,36,
    7,80,55,59,86,26,71,8,63,89,67,35,48,88,
    40,20,73,27,41,25,20,14,13,29,32,43,26,91,
    41,67,92,91,35,9,27,67,17,4,38,75,57,31,57,
    22,98,56,33,30,59,36,37,71,42,23,80,68,47,
    64,65,95,22,79,22,23,26,32,30,86,33,83,74,
    23,25,28,20,7,49,55,27,13,34,47,72,94,57,
    91,
  ];
  
  const bigTestResultArr = [
    46,38,18,23,56,71,28,18,35,51,45,83,
    78,36,18,80,55,59,86,26,71,17,63,89,
    67,35,48,88,40,20,73,27,41,25,20,17,
    17,29,32,43,26,91,41,67,92,91,35,17,
    27,67,17,17,38,75,57,31,57,22,98,56,
    33,30,59,36,37,71,42,23,80,68,47,64,
    65,95,22,79,22,23,26,32,30,86,33,83,
    74,23,25,28,20,17,49,55,27,17,34,47,
    72,94,57,91,
  ];

  expect(foodLines(bigTestArr,75))
    .toEqual(bigTestResultArr);
});
