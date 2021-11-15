//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const numero= (valor= undefined)=>{
    if(valor === undefined) return console.warn ("No ingresaste ningun numero");
    if (typeof valor !== "number") return console.log("el valor ingresado no es un número");
    if (Math.sign(valor) === -1) return console.log("el valor ingresado no puede ser negativo");

    if (valor === 0) return console.log("el número ingresado no puede ser 0")
    if (valor === 1) return console.log("el número ingresado no puede ser 1")

    let divisible = false;
    
    for(let i=2; i < valor; i++){
    
    if ((valor % i)=== 0) {
        divisible = true;
        break;
    }   
    }
    return (divisible)
    ?console.log(`el numero ${valor} no es un numero primo`)
    :console.log(`el numero ${valor} es un numero primo`)
}

numero(2);
numero("6");
numero();
numero(1);
numero(6);