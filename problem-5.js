/*
🧩 Problem 5: Count Odd Numbers
Write a function that counts how many odd numbers are in an array.
Sample Input: [1, 2, 3, 4, 6]
Sample Output: 2
*/

function oddNumbers(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            count++
        }
    }

    return count;
}

console.log(oddNumbers([1, 2, 3, 4, 6])); // 2