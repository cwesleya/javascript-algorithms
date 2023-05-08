/**
# Food Lines
## This is a modified version of [this](https://dmoj.ca/problem/lkp18c2p1) problem

INPUT
  `lines` - An array of integers >= 0, each of which is the amount of people in a line for food
  `newArrivals` - New people coming to join one of the lines in the `lines1 array

TASK
  Complete the `foodLines` function that takes a `lines` array and `newArivals` number
  and returns an array of all the updated lines after new arrivals have joined. Each
  new arrival must joins the smallest line in the array. If more than one line has the smallest
  number of people in it, the new arrival joins the first such line.

OUTPUT
  An array of updated lines.

Example:
  foodLines([3,2,5],4) should return [5,4,5]).

  There are 4 new arrivals:
   - the first arrival joins second 2, making it 3 --> [3,3,5]
   - the second joins the first line, making it 4 --> [4,3,5]
   - the third joins the second line again, making it 4 --> [4,4,5]
   - the fourth and final new arrival joins the first line, making it 5 --> [4,4,5]

 * @param {number[]} lines
 * @param {number} newArrivals
 * @return {number}
*/

function foodLines(lines, newArrivals) {

}

//module.exports = foodLines;