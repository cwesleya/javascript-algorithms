const wordCount = require('.');
const {
  runningTestCasesMsg,
  functionNotExists,
  functionNotExistsMsg,
} = require('../../../utils.js');

test(runningTestCasesMsg('wordCount'),() => {
  if (functionNotExists(wordCount)) {
    functionNotExistsMsg('wordCount');
    return;
  }
  
  const quote = `Of all the talents bestowed upon men, 
    none is so precious as the gift of oratory. 
    He who enjoys it wields a power more durable than that of a great king. 
    He is an independent force in the world. 
    Abandoned by his party, betrayed by his friends, stripped of his offices, 
    whoever can command this power is still formidable.`;

  expect(wordCount(quote))
    .toBe(59);
    
  expect(wordCount('f'))
    .toBe(1);
  
  expect(wordCount('  f '))
    .toBe(1);
  
  expect(wordCount(''))
    .toBe(0);

  expect(wordCount(' '))
    .toBe(0);
});
