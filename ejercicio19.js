const validarNombre = (nombre="") =>{
    if (!nombre) return console.error ("no ingresaste un nombre");
    if (typeof nombre !== "string") return console.log("el nombre ingresado no es una cadena")

    let expReg= /^[A-Za-zÑñüÜáéíóúÁÉÍÓÚ\s]+$/g.test(nombre);

    return(expReg)
    ?console.log(`${nombre} es un nombre valido`)
    :console.log(`${nombre} no es un nombre valido`);
}