/*
🧩 Problem 13: Sort Array in Ascending Order
Write a function to sort an array in ascending order.
Sample Input: [3, 1, 4, 2]
Sample Output: [1, 2, 3, 4]
*/

function ascendingSort(array) {
    return array.sort((a, b) => a - b);
}

console.log(ascendingSort([3, 1, 4, 2])); // [ 1, 2, 3, 4 ]

