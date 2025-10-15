/*
🧩 Problem 3: Find the Smallest Number
Write a function to find the smallest number in an array.
Sample Input: [10, 5, 20]
Sample Output: 5
*/

function smallestNumber(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
}

console.log(smallestNumber([10, 5, 20])); // 5