const lista1 = [
    1,
    2,
    3,
    4,
    1,
    2,
    4,
    2,
    2,
    5,
    3,
    1
];

const lista1Count = {};

lista1.map(
    function (elemento) {

        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count); 

lista1Array.sort(function(valorAcomulado, nuevoValor ){
    return valorAcomulado[1] - nuevoValor[1];
});

const moda = lista1Array[(lista1Array.length) - 1];