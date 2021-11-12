//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const miFuncion= (texto = "", patron ="")=>
    (!texto)
    ?console.warn ("No ingresaste ninguna string")
    :(!patron)
    ?console.log ("No ingresaste ningun patron")
    :console.log(texto.replace(new RegExp(patron,"ig"),""));


miFuncion();
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")


