/**
Write a function that takes a number n and does the following:
 - If n <= 0, return an empty string
 - If n > 0, then for every number i from 1 to n, build a string to return:
  - Add i to the string
  - If i is divisible by 3, add 'fizz' to the string
  - If i is divisible by 5, add 'buzz' to the string
  - If i is divisible by 3 and 5, add 'fizzbuzz' to the string

 * @param {number} n
 * @return {string}
*/

function fizzBuzz(n) {
  if (n <= 0) {
    return "";
  }

    const count = [];

    for (let i = 1; i <= n; i++) {
      if (i % 5 === 0 && i % 3 === 0) 
      {
        count.push(i + "fizzbuzz");
      } 
      
      else if (i % 5 === 0) {
        count.push(i + "buzz");
      } 
      
      else if (i % 3 === 0) {
        count.push(i + "fizz");
      } 
      
      else {
        count.push(i);
      }
    }
    
    return count.join("");
  }

module.exports = fizzBuzz;
