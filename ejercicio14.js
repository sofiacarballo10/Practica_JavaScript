//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const convertirGrados = (grados = undefined, unidad = undefined)=>{
    if(grados === undefined) return console.warn ("No ingresaste ningun grado");
    if(unidad === undefined) return console.warn ("No ingresaste ninguna unidad");
    if (typeof grados !== "number") return console.log("el valor ingresado no es un número");
    if (typeof unidad !== "string") return console.log("el valor ingresado no es una cadena");
    if (unidad.length !== 1 || !/(c|f)/.test(unidad)) return console.log("la unidad ingresada no es valida");

    if (unidad ==="c"){
        console.log (`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);
    } else if (unidad ==="f"){
        console.log (`${grados}°F = ${Math.round((grados - 32)*(5/9))}°F`);
    }

}

convertirGrados(0,"c")
convertirGrados(32,"f")
convertirGrados(0)
convertirGrados("c")
convertirGrados(0,"d")