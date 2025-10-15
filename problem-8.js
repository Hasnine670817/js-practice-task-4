/*
🧩 Problem 8: Convert All Names to Uppercase
Write a function that converts all names in an array to uppercase.
Sample Input: ["sabbir", "rakib", "tamim"]
Sample Output: ["SABBIR", "RAKIB", "TAMIM"]
*/

function uppercaseName(namesArray) {
    let uppercase = [];

    for (let i = 0; i < namesArray.length; i++) {
        let result = namesArray[i].toUpperCase();
        uppercase.push(result);
    }

    return uppercase;
}

console.log(uppercaseName(["sabbir", "rakib", "tamim"])); // [ 'SABBIR', 'RAKIB', 'TAMIM' ]