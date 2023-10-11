const sumNumbers = (arrayNumbers) => {
  const isOnlyNegativeNumbers = (arrayNumbers) => {
    return !arrayNumbers.some((number) => number > 0);
  };

  if (arrayNumbers.length === 0 || isOnlyNegativeNumbers(arrayNumbers)) {
    return 0;
  }

  let maxSum = 0;
  let currentSum = 0;

  arrayNumbers.forEach((number, index) => {
    currentSum = Math.max(number, currentSum + number);
    maxSum = Math.max(maxSum, currentSum);
    console.log({ number, currentSum, maxSum });
  });

  return maxSum > 0 ? maxSum : 0;
};

let sum = sumNumbers([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("[-2, 1, -3, 4, -1, 2, 1, -5, 4]", sum);
sum = sumNumbers([]);
console.log("[]", sum);
sum = sumNumbers([-1, -1, -1, -5]);
console.log("[-1,-1,-1,-5]", sum);

/*
Create a function that, given a one-dimensional array of integers, solves the "maximum sum subarray problem". 
This is the task of finding a contiguous subarray with the largest sum in the array. The function returns that sum.
If the array is made up of only positive numbers, the largest sum is the sum of the whole array.
If the array is made up of only negative numbers, return 0.
An empty array is considered to have 0 as the largest sum.
*/
