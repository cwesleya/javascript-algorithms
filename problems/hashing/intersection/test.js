const getIntersection = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('getIntersection'),() => {
  if (functionNotExists(getIntersection)) {
    functionNotExistsMsg('getIntersection');
    return;
  }
  
  expect(getIntersection([1,2,3,4,5],[0,2,4,6]))
    .toEqual([2,4]);

  expect(getIntersection([1,2,3,4,5,6,7,8,9],[8,9,10,11,12,13,14,15,16,17]))
    .toEqual([8,9]);

  expect(getIntersection([1,3,4,5,6,7,8,9],[0,11,12,13,14,15,16,17]))
    .toEqual([]);

  expect(getIntersection([],[]))
    .toEqual([]);
});
