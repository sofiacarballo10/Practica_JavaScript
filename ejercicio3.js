//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let string= "Hola que tal";
let array = string.split("");
console.log(array);

const miFuncion = (texto="", separador=undefined)=>
(!texto)
?console.log("No ingresaste texto")
:(separador===undefined)
?console.log("no ingresaste separador para determinar el texto")
:console.log(texto.split(separador));

miFuncion("Hola que tal"," ");
miFuncion("Hola mi amor"," ");
miFuncion("Hola mi amor");