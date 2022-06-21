// https://www.codewars.com/kata/56a946cd7bd95ccab2000055

// usa https://www.w3schools.com/jsref/jsref_match.asp para escribir una expresión regular que nos permita contar las letras que aparecen en minúsculas

function lowercaseCount(str) {
    //How many?
}

console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0)
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);