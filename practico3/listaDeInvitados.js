const listaPersonas=["Jose","Maria","Juan","Andres","Lionel","Sofia","Leandro","Emilia"];
let admitidos= [];
let rechazados=[];
for(let i=0;i<listaPersonas.length;i++){
    if(listaPersonas[i]=="Jose"|| listaPersonas[i]=="Sofia")
    {
            rechazados.push(listaPersonas[i]);
    }
    else{
        admitidos.push(listaPersonas[i]);
    }

}
if(admitidos.length!=0){
    console.log("La lista de invitados admitidos es: ");
    for(let i=0;i<admitidos.length;i++){
        console.log(admitidos[i]);    
    }
}
else{
    console.log("La lista de invitados admitidos esta vacia");
}

if(rechazados.length!=0){
    console.log("La lista de invitados rechazados es: ");
    for(let i=0;i<rechazados.length;i++){
        console.log(rechazados[i]);    
    }
}
else{
    console.log("La lista de invitados rechazados esta vacia");
}

//Para variar un poco voy a probar de dos formas diferentes, primero usando una funcion propia de los array
admitidos.sort();
console.log("La lista de invitados admitidos ordenada es: ")
for(let i=0;i<admitidos.length;i++){
    console.log(admitidos[i]);   
}


//Y ahora recorriendo el array y ordenandolo
for(let i=0;i<rechazados.length;i++){
   for(let j=i+1;j<rechazados.length;j++){
        if(rechazados[i]>rechazados[j])
        {
            let temporal=rechazados[i];
            rechazados[i]=rechazados[j];
            rechazados[j]=temporal;
        }
   }
}
console.log("La lista de invitados rechazados ordenada es: ")
for(let i=0;i<rechazados.length;i++){
    console.log(rechazados[i]);   
}