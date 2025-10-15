/*
🧩 Problem 11: Find Index of a Specific Element
Write a function that returns the index of a given value in an array.
Sample Input: [10, 20, 30, 40], value = 30
Sample Output: 2
*/

function returnIndexAndValue(array, index) {
    return array.indexOf(index);
}

console.log(returnIndexAndValue([10, 20, 30, 40], 30)); // 2