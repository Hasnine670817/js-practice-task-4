/*
🧩 Problem 2: Find the Largest Number
Write a function to find the largest number in an array.
Sample Input: [10, 50, 20]
Sample Output: 50
*/

function largestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }
    }

    return largest;
}

console.log(largestNumber([10, 50, 20])); // 50