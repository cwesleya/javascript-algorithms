/**
Write a function that takes a number returns true if it is prime and false otherwise.

 * @param {number} n
 * @return {boolean}
*/

function isPrime(n) {
  if (n <= 1) {
    return false;
  } 
  
  else if (n > 2 && n % 2 === 0) {
    return false;
  } 
  
  else if (n > 3 && n % 3 === 0) {
    return false;
  } 
  
  else if (n > 5 && n % 5 === 0) {
    return false;
  } 
  
  else if (n > 7 && n % 7 === 0) {
    return false;
  } 
  
  else {
    return true;
  }
}

isPrime(15485863);

module.exports = isPrime;
