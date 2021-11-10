//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

//solución solamente con variable

let nombre1 = "Hola Mundo"
console.log(nombre1.length);

//solución solamente con función

function miFuncion(nombre){
   return nombre.length;
}


const resultado= miFuncion("Hola Mundo");
console.log(resultado);

const resultado2= miFuncion("Hola");
console.log(resultado2);

//Solucion con forEach

/*function contarCaracteres(nombre){
    let contador = 0;

    [...nombre].forEach((element,index) => {
        console.log(`vamos por la letra= ${element}`);
        console.log(`contador antes de sumar= ${contador}`);
        contador = contador + 1;
        console.log(`contador despues de sumar= ${contador}`);
        console.log(`------------------`);
    });

    return contador;
}

const palabra = "Hola mundo";
const cantidadLetras = contarCaracteres("Hola mundo");
console.log(`La cantidad de letras que tiene la palabra ${palabra} es ${cantidadLetras}`);*/

function contarLetras(nombre){
    let contador = 0;

    [...nombre].forEach((element,index) => {
            contador = contador + 1;
    });
    return contador;
    
}

const miFuncion2 = contarLetras("Hola Mundo");
console.log(miFuncion2);

