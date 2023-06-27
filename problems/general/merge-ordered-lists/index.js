/**
 Write a function that takes two ordered arrays. Merge them into one ordered array and return it.

 * @param {number|string[]} list1
 * @param {number|string[]} list2
 * @return {number|string[]}
*/

function mergeOrderedLists(list1 = [], list2 = []) {
  const list3 = list1.concat(list2);
  return list3.sort(function (a, b) {
    return a - b;
  });
}

mergeOrderedLists([1, 3, 5, 7, 9], [2, 4, 6, 8]);


module.exports = mergeOrderedLists;
