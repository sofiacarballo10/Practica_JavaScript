//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

const miFuncion = (texto="", repetir=undefined)=>
(!texto)
?console.log("No ingresaste texto")
:(repetir===undefined)
?console.log("no ingresaste repetidor para determinar el texto")
:console.log(texto.repeat(repetir));

miFuncion("Hola Mundo ",3);