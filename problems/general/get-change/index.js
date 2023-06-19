/**
  Write a function that takes an amount of money (e.g., 1.23) and returns the minimum number of coins 
  (quarters, dimes, nickels, pennies) needed to equal the amount. 
  Use as few coins as possible and label the coins returned. 
  For instance, if I send 1.23 to the function, I should get back 9 coins: 4 quarters, 2 dimes, 0 nickels, and 3 pennies.
  Of course, I could send back 123 pennies, but who wants that many pennies? 
  (Assume that the input will always be a decimal number greater than zero.)

 * @param {number} amount
 * @return {number}
*/

function getChange(amount) {
  let change,
    qtrCount,
    dimeCount,
    nickelCount = 0;

  const qtr = amount / 0.25;
  qtrCount = Math.floor(qtr);
  change = Math.round((amount - qtrCount * 0.25) * 100) / 100;

  const dime = change / 0.1;
  dimeCount = Math.floor(dime);
  change = Math.round((change - dimeCount * 0.1) * 100) / 100;

  const nickle = change / 0.05;
  nickelCount = Math.floor(nickle);
  change = Math.round((change - nickelCount * 0.05) * 100) / 100;

  const penny = change / 0.01;
  pennyCount = Math.floor(penny);
  change = Math.round((change - pennyCount * 0.01) * 100) / 100;

  let totalCoins = qtrCount + dimeCount + nickelCount + pennyCount;

  return totalCoins;
}

getChange(1.31);

module.exports = getChange;
