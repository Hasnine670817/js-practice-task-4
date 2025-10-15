/*
🧩 Problem 7: Double Each Number
Write a function that returns a new array where each number is doubled.
Sample Input: [2, 3, 4]
Sample Output: [4, 6, 8]
*/

function doubledNumber(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        doubled = numbers[i] * 2;
        result.push(doubled);
    }

    return result;
}

console.log(doubledNumber([2, 3, 4])); // [ 4, 6, 8 ]