/*
🧩 Problem 4: Count Even Numbers
Write a function that counts how many even numbers are in an array.
Sample Input: [1, 2, 3, 4, 6]
Sample Output: 3
*/

function evenNumbers(numbers) {
    count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++
        }
    }

    return count;
}

console.log(evenNumbers([1, 2, 3, 4, 6])); // 3