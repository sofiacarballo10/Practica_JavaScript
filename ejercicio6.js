//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const miFuncion = (cadena="", palabra="")=>{
if(!cadena)
return console.log("No ingresaste texto")
if(!palabra)
return console.log("no ingresaste palabra a contar dentro del texto")

let p=0;
let contador =0;
while (p !== -1){
p= cadena.indexOf(palabra,p)
if(p !== -1 ){
    p++
    contador++
    }
} 
    return console.log(`la palabra ${palabra} se repite ${contador} veces`)
}



miFuncion("hola mundo adios mundo", "mundo");
