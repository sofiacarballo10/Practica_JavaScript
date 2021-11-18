//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (cadena="")=>{
    if (!cadena) return console.log("No ingresaste ninguna cadena")
    if (typeof cadena !== "string") return console.log("El valor ingresado no es una cadena")

    let vocales = 0;
    let consonantes = 0;

    cadena = cadena.toLocaleLowerCase();

    for(let letra of cadena){
        if(/[aeiouáéíóúÜ]/.test(letra)) vocales++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }

    return console.info({
        cadena,
        vocales,
        consonantes
    })
}

contarLetras();
contarLetras("Hola Mundo");
contarLetras("");
