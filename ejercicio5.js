//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".


//funcion declarada
function miFuncion(nombre=""){
    if(!nombre){
        console.warn ("No ingresaste ninguna string");
    }else{
        console.log(nombre.split("").reverse().join(""))
    }
}


miFuncion("Hola Mundo");

