const lista1 = [
    100,
    200,
    500,
    400000000,
]

const mitadLista1 = parseInt(lista1.length/2);

function esPar (numero){
    if (numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function calcularPromedio (elemento1,elemento2){
    const promedio = (elemento1 + elemento2)/2;
    return promedio
}



let mediana;

if (esPar(lista1.length) === true){
    mediana = calcularPromedio(
        lista1[mitadLista1],
         lista1[mitadLista1 - 1]
    );
}else{
    mediana = lista1[mitadLista1];
}