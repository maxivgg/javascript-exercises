/*
Create a function that removes a number n of the smallest numbers from an array of integers arr, taking the following into account:
The integer n represents the number of elements to be removed from the
array.
• If there are multiple elements with the same value, remove the ones with the lower index first.
• If n is greater than or equal to the length of the array, return an empty array.
• If n is zero or less, return the original array.
• Don't change the order of the elements that are left.
Examples:
removeNSmallest(-10, [1,2,3,4,5])// should == [1,2,3,4,5]
removeNSmallest(0, [1,2,3,4,5]) // should == [1,2,3,4,5] 
removeNSmallest(2, [5,3,2,1,4]) // should == [5,3,4] 
removeNSmallest(3, [5,3,2,1,4]) // should == [5,4] 
removeNSmallest(3, [1,2,3,4,5]) // should == [4,5] 
removeNSmallest(5, [1,2,3,4,5]) // should == []
removeNSmallest(9, [1,2,3,4,5]) // should == []
*/

const removeNSmallest = (number, arrayNumbers) => {
  return arrayNumbers.filter((n) => n > number);
};

console.log("-10, [1,2,3,4,5]", removeNSmallest(-10, [1, 2, 3, 4, 5]));
console.log("2, [5,3,2,1,4]", removeNSmallest(2, [5, 3, 2, 1, 4]));
console.log("3, [5,3,2,1,4]", removeNSmallest(3, [5, 3, 2, 1, 4]));
console.log("3, [1,2,3,4,5]", removeNSmallest(3, [1, 2, 3, 4, 5]));
console.log("5, [1,2,3,4,5]", removeNSmallest(5, [1, 2, 3, 4, 5]));
console.log("9, [1,2,3,4,5]", removeNSmallest(9, [1, 2, 3, 4, 5]));
