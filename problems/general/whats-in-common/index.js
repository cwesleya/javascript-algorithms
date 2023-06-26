/**
  Write array1 function that takes two ascending ordered arrays and returns the elements in common between them.

 * @param {number|string[]} array1
 * @param {number|string[]} array2
 * @return {number|string[]}
*/

// Wasn't able to figure this one out

function whatsInCommon(array1, array2) {
  let matches = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        matches.push(array1[i])
      }
    }
  }
  return matches
}

whatsInCommon([1, 2, 3], [2, 4, 3,]);

//module.exports = whatsInCommon;
