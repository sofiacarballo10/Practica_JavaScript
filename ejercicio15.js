//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const numeroBinario = (numero=undefined, base=undefined)=>{
    if (numero === undefined) return console.log ("no ingresaste un numero")
    if (typeof numero !== "number") return console.log("el valor ingresado no es un número");
    if (typeof base === undefined) return console.log("no ingresaste una base");
    if (typeof base !== "number") return console.log("el valor ingresado no es un número");
   
   

    if (base===2){
        return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
    } else if (base===10){
        return console.log(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }
    return console.log("el valor ingresado no es valido")
} 

numeroBinario(550,8);
numeroBinario(110,2);
numeroBinario(550,10);
numeroBinario("550",2)
numeroBinario(550,"8")