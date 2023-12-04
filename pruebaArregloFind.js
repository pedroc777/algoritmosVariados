let arreglo = [["propiedad1","propiedad2","propiedad3"],["propiedad4","propiedad5","propiedad6"]];
//let arreglo = 
arreglo = arreglo.flat();
//console.log(arreglo);
let arregloEncabezados = ["valor1","valor2","valor3"];
let arregloAuxiliar = [];
let arregloObjeto = [];

for(let i = 0; i < arregloEncabezados.length; i++){
    //arregloAuxiliar[arregloEncabezados[i]]= arreglo[0][i];
}

let i = 0;
let j = 0;
while(i < arreglo.length){
    arregloAuxiliar[arregloEncabezados[j]]= arreglo[i];
    j++;
    if(j === arregloEncabezados.length){
        j = 0;
        /*console.log(arregloAuxiliar);
        console.log(Object.assign({}, arregloAuxiliar));*/
        arregloObjeto.push(Object.assign({}, arregloAuxiliar));

    }
    i++;
}

console.log(arregloObjeto);

if(arregloObjeto[0].valor1 === "propiedad2"){
    console.log(true);
}else{
    console.log(false);
}


//let objeto = Object.assign({}, arreglo);

//console.log(objeto);