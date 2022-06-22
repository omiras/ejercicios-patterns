// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

/**
 * La funcion limpia las 'anclas' de la URL
 * 
 * @param {string} url 
 * @returns La URL sin '#loquesea'
 */

function removeUrlAnchor(url) {
    let regexp = /#[a-z]+/; // Modificar aquí

    return url.replace(regexp, '');
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com#home'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')