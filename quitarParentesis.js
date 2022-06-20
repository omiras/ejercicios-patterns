let texto = "example(unwanted thing)example";

let regexp = /\([\w ]+\)/g;


let resultado = texto.replace(regexp, '');

console.log(resultado);