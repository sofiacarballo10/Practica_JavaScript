//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const numero= (valor= undefined)=>{
    if(!valor) return console.warn ("No ingresaste ningun numero");
    if (typeof valor !== "number") return console.log("el valor ingresado no es un número");
    if (valor === 0) return console.log("el valor ingresado no puede ser 0");
    if (Math.sign(valor) === -1) return console.log("el valor ingresado no puede ser negativo");

    let factorial =1;

    for (let i=valor; i>1 ;i-1){
        factorial = factorial * i;
    }
    return console.info(`El factorial de "${valor}" es "${factorial}" factorial `);
    }



numero(5);