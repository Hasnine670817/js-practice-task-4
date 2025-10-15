/*
Problem 6: Find Numbers Greater Than 10
Write a function that returns all numbers greater than 10.
Sample Input: [5, 12, 18, 3]
Sample Output: [12, 18]
*/

function greaterThanTen(numbers) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            result.push(numbers[i]);
        }
    }

    return result;
}

console.log(greaterThanTen([5, 12, 18, 3])); // [12, 18]