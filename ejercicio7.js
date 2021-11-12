//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const miFuncion= (palabra= "")=>{
    if(!palabra)
       return console.warn ("No ingresaste ninguna string");
    palabra = palabra.toLowerCase();
    let palabraAlReves = palabra.split("").reverse().join("");

    (palabra === palabraAlReves)
    ? console.log(`si es un palíndromo porque la palabra ${palabra} es igual a la palabra al revés ${palabraAlReves}`)
    : console.log(`No es un palindromo, porque la palabra ${palabra} no es igual a la palabra al revés ${palabraAlReves}`)
    }


miFuncion("Salas")
miFuncion("Hola")