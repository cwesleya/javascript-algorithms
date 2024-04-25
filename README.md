# Algorithms in Javascript

## The aim of this repo is to help you learn to think like a programmer while learning Javascript. Along the way, you can learn lessons about:
  - `git`, which is what you will use to interact with this repo
  - `jest`, the testing framework this repo uses to test your solutions
  - and `node`, which you will need in order to run any of this code outside of a browser.

### As far as possible, try to solve these problems without using built-in javascript methods. For example, if a problem says to reverse an array, don't use `.reverse()`! Rather, write a function that tries to do what `.reverse()` does under the hood. That's how you learn to think like a programmer. It would go something like this:

```javascript
//this reverses an array in place
function reverseArray(array) {
  let i = 0, len = array.length-1;

  while (i < len) {
    const swap = array[i];
    array[i] = array[len];
    array[len] = swap;
    i++;
    len--;
  }

  return array;
}
```

### Basic steps to take when solving a problem in code:
1. Read every problem carefully---twice if you need to. Make sure you know exactly what it's asking for before trying to solve it. You can't solve what you don't fully understand.
2. It usually helps to solve it manually. Maybe even try to write it out, step by step, in English. This is called pseudo-code. Code can only solve a problem that's solvable manually.
3. Write the code that solves it.
4. If you have time, modify your code to make it perform better.

Example: Write a function that accepts an array of numbers and returns true if there is at least one duplicate number and false otherwise. Assume that only integers will be in the array.

1. Ok, I read it twice. I know what it's asking me to do.
2. Manual solution in pseudo-code:
 - So there will be an array of numbers like this `[1,4,19,100000,-1,8,8]`. Or it could be empty []. Or maybe it contains no duplicates `[1,-2,3,4,5]`. I don't know how big the array could be. Maybe it's small, but maybe not. I can't assume one way or the other what kind of array or how big it will be; my code needs to handle all cases.
 - Step one is to iterate through the array and look at each member.
 - For each number, I can search again through the numbers in the array to the right of it (see comment in green) to find its duplicate. If I find it, return true. If I make it through the entire array without finding any match, I'll just return false.
3. First pass:

```javascript
function hasDuplicates(arrayInt) {
  //for loop is preferred in this case to .forEach(), since we want to stop as soon as we find the right answer.
    for (let i = 0; i < arrayInt.length; i++) {
      const current = arrayInt[i];

      for (let j = i+1; j < arrayInt.length; j++) {
          //notice we set j = i+1. why is that a good idea?
          if (current === arrayInt[j]) {
              return true;
          }
      }
    }

    return false;
}
```

That function works but it's inefficient. For each member of the array, I'm searching through all the numbers to the right in order to find its duplicate. If it has ten members, then I'm doing close to 100 searches in the worst case! Maybe I can find a way to loop fewer times. Ideally, I'd like iterate at most one time through the array. So I need to store the ones I've seen. Here's a better way:

```javascript
function hasDuplicates(arrayInt) {
    /*
     I use a key-value object/dictionary because looking up a key is instant,
     which is better than having to search through an array to check for a duplicate
    */
    const seenNumbers = { };

    for (let i = 0; i < arrayInt.length; i++) {
        const currentNumber = arrayInt[i];

        if (seenNumbers[currentNumber] !== undefined) {
            /*
             if I ran across it earlier in the array and added the key in the dictionary,
             this will be true. 'undefined' is evaluated as false in js!
            */
            return true; // return true when first duplicate found. no need to go any further
        }

        seenNumbers[currentNumber] = true; // otherwise, add this number as a key to dictionary.
    }

    return false;
}
```

Even better, you can use the `Set` object in Javascript for hashing, like this:

```javascript
function hasDuplicates(numsArray) {
    //set is a nice way to store unique keys when you don't need to store a key's value
    const seenNumbers = new Set();

    for (let i = 0; i < numsArray.length; i++) {
        const n = numsArray[i];

        if (seenNumbers.has(n)) {
            return true;
        }

        seenNumbers.add(n);
    }

    return false;
}
```

## Setup

To add a solution, go to the `index.js` file for a given problem.

Add your solution inside the function and un-comment the `module.exports = <functionName>;` line at the bottom.

### Running with Docker
If you have [Docker](https://hub.docker.com/), the command `npm run docker:build` will build the image and `npm run docker:run` will run the application tests and output your answer(s) in the console. 

You can remove the container and image with `npm run docker:clean`.

### Running without Docker
If you do not have Docker, to run this application you will need [Node](https://nodejs.org/), preferably version 21 or later.

Navigate to the root directory of the repository.

Run `npm install` to pull in the code dependencies.

The command `npm test` will run all tests in the app.

To run just one test, specify the file like this: `npm test ./problems/general/food-lines/test.js`.

If you want to ignore a test, simply comment out the `exports` line, e.g., `//module.exports = <functionName>;`.

Run `npm run clean` to remove dependencies when you're not testing with the app. No need for extra files until you need to test again.
