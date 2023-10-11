// Write a function that takes an array that represents a Binary Tree and a value
// and returns True if the value is in the tree and False otherwise.

// An array that represents a Binary Tree is in the following form:
// binaryTree = [val, arrLeft, arrRight]
// When arrLeft is the left side of the tree and arrRight is the right side of the tree.

// To illustrate:
// const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]
// arr1 represents the following Binary Tree:
// Where N represents null.
//                    3
//                   / \
//                  8   7
//                 /\   /\
//                5  N N  N
//               /\
//               N N
//
// valueInTree(arr1, 5) ➞ true
// valueInTree(arr1, 9) ➞ false
// valueInTree(arr1, 7) ➞ true

// Your code goes here...

const valueInTree = (tree, value) => {
  if (tree) {
    const [val, arrLeft, arrRight] = tree;

    if (typeof val === "number" && val === value) {
      return true;
    }
    if (Array.isArray(arrLeft) && valueInTree(arrLeft, value)) {
      return true;
    }

    if (Array.isArray(arrRight) && valueInTree(arrRight, value)) {
      return true;
    }
  }

  return false;
};

// Testing your function
const tree = [
  65,
  [5, [3, null, [11, null, null]], null],
  [2, null, [24, null, null]],
];

console.log(valueInTree(tree, 11)); //true

console.log(valueInTree(tree, 10)); //false

console.log(valueInTree(tree, 24)); //true
