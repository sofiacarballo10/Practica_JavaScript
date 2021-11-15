//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const numero= (valor= undefined)=>{
    if(!valor) return console.warn ("No ingresaste ningun numero");
    if (typeof valor !== "number") return console.log("el valor ingresado no es un número");
    return (numero % 2 == 0) 
      ?console.log(`El número ingresado ${valor} es par`) 
      :console.log(`El número ingresado ${valor} es impar`)
}

numero(21);