const reverseWordsInSentence = require('./');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('reverseWordsInSentence'), () => {
  if (functionNotExists(reverseWordsInSentence)) {
    functionNotExistsMsg('reverseWordsInSentence');
    return;
  }

  expect(reverseWordsInSentence('How do you reverse words in a given sentence without using any library method?'))
    .toBe('method? library any using without sentence given a in words reverse you do How');

  expect(reverseWordsInSentence('Howdy there partna?'))
    .toBe('partna? there Howdy');
});
