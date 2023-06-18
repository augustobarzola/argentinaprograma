
const meses= [{nombre:"Enero",cantDias:31} ,
        {nombre:"Febrero",cantDias:28},
        {nombre:"Marzo",cantDias:31},
        {nombre:"Abril",cantDias:30},
        {nombre:"Mayo",cantDias:31},
        {nombre:"Junio",cantDias:30},
        {nombre:"Julio",cantDias:31},
        {nombre:"Agosto",cantDias:31},
        {nombre:"Septiembre",cantDias:30},
        {nombre:"Octubre",cantDias:31},
        {nombre:"Noviembre",cantDias:30},
        {nombre:"Diciembre",cantDias:31}];
const readlineSync = require('readline-sync');
const numeroMes = readlineSync.question('Por favor, ingrese un numero. ');
if(numeroMes>=1 && numeroMes<=12){
    console.log("La cantidad de dias del mes de "+meses[numeroMes-1].nombre+" es "+meses[numeroMes-1].cantDias)
}