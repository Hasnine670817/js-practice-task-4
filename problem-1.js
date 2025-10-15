/*
🧩 Problem 1: Sum of All Numbers in an Array
Write a function to find the sum of all numbers in an array.
Sample Input: [1, 2, 3, 4]
Sample Output: 10
*/


function sumOfAllNumbers(numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(sumOfAllNumbers([1, 2, 3, 4])); // 10