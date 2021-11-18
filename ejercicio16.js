//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

const aplicarDescuento = (monto=undefined, descuento=0)=>{
    if (monto === undefined) return console.warn ("no ingresaste un numero")
    if (typeof monto !== "number") return console.error("el valor ingresado no es un número");
    if (monto === 0) return console.error("el monto no puede ser 0");
    if(Math.sign(monto) ===-1) return console.error("el monto no puede ser negativo");
    if (typeof descuento === undefined) return console.log("no ingresaste un descuento");
    if (typeof descuento !== "number") return console.log("el valor ingresado no es un número");
    if(Math.sign(descuento) ===-1) return console.error("el descuento no puede ser negativo");

    return console.info(`$ ${monto} - ${descuento}% = $ ${monto - ((monto * descuento)/100)}`)

}

aplicarDescuento(1000,5);
aplicarDescuento(0,5);
aplicarDescuento(1000,0);
aplicarDescuento("1000",5);
aplicarDescuento(-1000,5);
aplicarDescuento(1000,-5);
