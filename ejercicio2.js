//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const miFuncion = (texto="", longitud=undefined)=>
(!texto)
?console.log("No ingresaste texto")
:(longitud===undefined)
?console.log("no ingresaste la longitud para determinar el texto")
:console.log(texto.slice(0,longitud))

miFuncion("Hola Mundo",4);
miFuncion("Hola Nacho",6);
miFuncion("Hola");
miFuncion("",3);