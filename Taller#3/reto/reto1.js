// ordeanar datos

const lista = [
    300,
    500,
    100,
    250,
    800,
    90,
    1000,
    1,
    230,
    999,
    3000
];


const nuevaLista = lista.sort(
    function(a, b){return a - b;}
    ); 


const numeroMedio = parseInt(((nuevaLista.length) + 1)/2);



function promedio(){
    const mediana =  (nuevaLista[numeroMedio - 1] + nuevaLista [numeroMedio] )/2;
    return mediana
}


function par(){
    if(nuevaLista.length % 2 == 0){
        return promedio();
    }else{
        return nuevaLista[numeroMedio - 1];
    }
}

// let nuevaLista = [lista[0]];


// for(let i = 0; i < lista.length; i++){

//     let nuevoDato = lista[i+1];

//     if(nuevoDato < nuevaLista[i] ){

//         nuevaLista[i+1] = nuevaLista[i];
//         for(let z = i-1; z > (-1); z--){
//             if (nuevoDato < nuevaLista[z]){
//                 nuevaLista[z+1] = nuevaLista[z];
//                 nuevaLista[z] = nuevoDato;
//             }
//         }
//     }else{
//         nuevaLista[i+1] = nuevoDato; 
//     }

// }


