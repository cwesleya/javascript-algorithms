function runningTestCasesMsg(funcName) {
  return `Running test cases for ${funcName}.`
}

function functionNotExists(func) {
  return typeof func !== 'function';
}

function functionNotExistsMsg(funcName) {
  console.log(`NO TEST: ${funcName} hasn\'t been completed or isn\'t exported.`);
}

//module.exports = {
runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
};