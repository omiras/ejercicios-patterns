// https://www.codewars.com/kata/577ad961ae2807182f000c29/

function countChar(string, char) {
    // your mission, should you choose to accept it. 
    // test, match o replace + la expresión regular adecuada

    // Creamos una expresión regular, con el valor de la variable 'char' (el carácter a buscar); y definimos los flags como global y case-insensitive
    const r = new RegExp(char, "gi");

    let counts = string.match(r);

    if (!counts) {
        return 0;
    }

    return counts.length;
}

console.log(countChar("fizzbuzz", "z"), 4);
console.log(countChar("f", "f"), 1);
console.log(countChar("F", "f"), 1);
console.log(countChar("patata", "s"), 0);


// Desplegar para ayuda: 
/**
 * Ayuda: function countChar(string, char) {
    let matches = string.match(/EXPRESION-REGULAR-USANDO-EL-PARÁMETRO-CHAR/);

    // Cuidado para el caso que matches vale null...

    return matches.length;
}
 */