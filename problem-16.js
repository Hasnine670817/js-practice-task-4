/*
🧩 Problem 16: Find Index of First Number Greater Than 5
Write a function that returns the index of the first number greater than 5.
Sample Input: [1, 3, 7, 2]
Sample Output: 2
*/

function maxFirstIndexNumber(array) {
    return array.findIndex(num => num > 5);
}

console.log(maxFirstIndexNumber([1, 3, 7, 2])); // 2