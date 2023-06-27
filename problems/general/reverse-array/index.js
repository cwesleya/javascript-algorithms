/**
 Write a function that takes an array and returns it in reverse order.

 * @param {number|string[]} array
 * @return {number|string[]}
*/

function reverseArray(array) {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  
  return reversed;
}

reverseArray([1, 2, 3, 4]);

module.exports = reverseArray;
