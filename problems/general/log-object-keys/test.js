const logObjectKeys = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('logObjectKeys'),() => {
  if (functionNotExists(logObjectKeys)) {
    functionNotExistsMsg('logObjectKeys');
    return;
  }

  const testObj = {
    key1: 'value',
    key2: 'value',
    key3: 'value',
  };

  const consoleSpy = jest.spyOn(console, 'log');

  expect(logObjectKeys(testObj));

  expect(consoleSpy).toHaveBeenCalledWith('key1');
  expect(consoleSpy).toHaveBeenCalledWith('key2');
  expect(consoleSpy).toHaveBeenCalledWith('key3');
});
