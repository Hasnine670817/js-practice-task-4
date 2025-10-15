/*
🧩 Problem 12: Remove Duplicate Values
Write a function that removes duplicate values from an array.
Sample Input: [1, 2, 2, 3, 3, 4]
Sample Output: [1, 2, 3, 4]
*/

function removeDuplicateValues(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i]);
        }
    }

    return result;
}

console.log(removeDuplicateValues([1, 2, 2, 3, 3, 4])); // [ 1, 2, 3, 4 ]