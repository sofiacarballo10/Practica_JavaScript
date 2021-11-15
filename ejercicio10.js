//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const Numero= (valor= 0)=>{
    if(!valor) return console.warn ("No ingresaste ningun numero");
    if (typeof valor !== "number") return console.log("el valor ingresado no es un número")

    valor = valor.toString();
    let valorAlReves = valor.split("").reverse().join("");

    (valor === valorAlReves)
    ? console.log(`si es un número capicua porque ${valor} es igual a ${valorAlReves}`)
    : console.log(`No es un número capicua, porque ${valor} no es igual a ${valorAlReves}`)
    }


Numero("Salas");
Numero(55);