//17) Programa una función que dada una fecha válida determine cuanto tiempo ha pasado hasta el día de hoy 16/11/2021



const calcularTiempo = (anio=undefined, mes= undefined, dias= undefined)=>{
    if (anio === undefined) return console.warn ("no ingresaste un año");
    if (anio === 0) return console.error ("el valor ingresado en año no puede ser 0");
    if (typeof anio !== "number") return console.error("el valor año ingresado no es un número");
    if (mes === undefined) return console.error("no ingresaste un mes");
    if (typeof mes !== "number") return console.error("el valor mes ingresado no es un número");
    if (typeof dias === undefined) return console.log("no ingresaste días");
    if (typeof dias !== "number") return console.log("el valor ingresado en dias no es un número");

    if(Math.sign(anio, mes, dias) ===-1) return console.error("el valor no puede ser negativo");
    
let anioBase= 2021;
let mesBase= 11;
let diaBase= 16;
let diasResultado
let mesesResultado
let cantDiasMes;

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        cantDiasMes=31;
        break;
    case 2:
        cantDiasMes=28;
        break;
    default:
        cantDiasMes=30;
        break;
}

if(diaBase>dias){
    diasResultado= diaBase - dias
    mesesResultado= mesBase - mes
}else {
    diasResultado= (cantDiasMes-dias)+diaBase;
    mesesResultado= ((mesBase-1)-mes);

}




return console.log(`Transcurrieron ${(anioBase-anio)} anios, ${mesesResultado} meses y ${diasResultado} dias` );
}

calcularTiempo(2021,"2",1);
calcularTiempo("2021",2,1);
calcularTiempo(0,2,1);
calcularTiempo(-2021,2,1);
calcularTiempo(2019,10,23);
calcularTiempo(1984,4,23);
calcularTiempo(2021,10,23);