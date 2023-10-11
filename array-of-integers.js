const getTotal = (arrayOfIntegers) => {
  let sum = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    const number = arrayOfIntegers[i];
    if (number % 2 === 0) {
      sum = sum + 1;
    } else if (Number(number) === 5) {
      sum = sum + 5;
    } else {
      sum = sum + 3;
    }
  }
  return sum;
};

console.log("sum [1,2,3,4,5]", getTotal([1, 2, 3, 4, 5]));
console.log("sum [17,19,21]", getTotal([17, 19, 21]));
console.log("sum [5,5,5]", getTotal([5, 5, 5]));

/* 
Given an array of integers, keep a total score based on the following:

Add 1 point for every even number in the array
Add 3 points for every odd number in the array, except for the number "5"
Add 5 points every time the number "5" appears in the array

Note that 0 is considered even.

Examples:
Input: [1,2,3,4,5]
Output: 13

Input: [17,19,21]
Output: 9

Input: [5,5,5]
Output: 15
*/
