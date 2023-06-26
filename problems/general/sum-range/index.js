/**
Write a function that takes returns the sum of all numbers between n and m inclusive.

 * @param {number} n
 * @param {number} m
 * @return {number}
*/

function sumRange(n, m) {
  let sum = 0;
  for (let i = n ; i <= m; i++) {
    sum = sum + i;
  }
  return sum;
}

module.exports = sumRange;
