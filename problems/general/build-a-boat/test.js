const Boat = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('Boat'),() => {
  if (functionNotExists(Boat)) {
    functionNotExistsMsg('Boat');
    return;
  }

  const boat = new Boat();

  expect(boat.getSpeed())
    .toBe(0);
  
  boat.setSpeed(25)

  expect(boat.getSpeed())
    .toBe(25);

  boat.stop();

  expect(boat.getSpeed())
    .toBe(0);
});
