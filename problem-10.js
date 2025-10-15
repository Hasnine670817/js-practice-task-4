/*
🧩 Problem 10: Find Total Word Length
Write a function to find the total number of characters from all words.
Sample Input: ["Hi", "JS", "World"]
Sample Output: 9
*/

function totalCharacterOfAllWords(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }

    return sum;
}

console.log(totalCharacterOfAllWords(["Hi", "JS", "World"])); // 9