/*
🧩 Problem 15: Find First Even Number
Write a function that returns the first even number from an array.
Sample Input: [1, 3, 7, 8, 10]
Sample Output: 8
*/

function firstEvenNumber(array) {
    return array.find(num => num % 2 === 0);
}

console.log(firstEvenNumber([1, 3, 7, 8, 10])); // 8