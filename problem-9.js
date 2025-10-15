/*
 Problem 9: Filter Only String Elements
Write a function that filters and returns only string elements from an array.
Sample Input: [1, "apple", true, "banana"]
Sample Output: ["apple", "banana"]
*/

function filtersStringElements(array) {
    let stringArray = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            stringArray.push(array[i]);
        }
    }

    return stringArray;
}

console.log(filtersStringElements([1, "apple", true, "banana"])); // ["apple", "banana"]