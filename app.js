let usuario = "100€ y despues tuve que pagar 50€; y no conforme con ello tuve que aportar 210€, y luego tuve que pagar 450000€, y luego le llamé al 666777888";

// Captura todos los importes de esta cadena de texto
let regexp = /[0-9]+€/g;

// Devuelve un array con todas las capturas de la expresión regular
console.log(usuario.match(regexp));
