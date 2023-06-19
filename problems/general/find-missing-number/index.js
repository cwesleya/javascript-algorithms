/**
Write a function that takes an array of numbers from 1-n (in ascending order) with exactly one number missing.
Have it return the missing number.

 * @param {number[]} array
 * @return {number}
*/


//Not getting this one correct 

function findMissingNumber(array) {
  const missArr = array;
  const fullArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const results = fullArr.filter((num) => missArr.indexOf(num) == -1);
  return results;
}

// function findMissingNumber(array) {
//   const missArr = array;
//   const fullArr = [1, 2, 3, 4, 5];

//   for (let i = 0; i < fullArr.length; i++) {
//     if (fullArr[i] !== missArr[i]) {
//       let found = missArr[i] -1 ;
//       return found;
//     }
//   }
// }

findMissingNumber([1, 2, 3, 5]);

module.exports = findMissingNumber;
