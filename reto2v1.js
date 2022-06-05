const lista = [
    2,1,3,4,6,6,6,5,7,
    10,10,10,20,4,5,1,
    1,1,2,3,4,5,6,7,8,
    5,4,2,1,3,4,5,6,1,
    3,4,4,4,4,5,6,5,6,
    6,6,6,6,5,6,56,6,5
];

const agrupado = {};
var agrupadoArray;
var ordenadoAgrupadoArray;
var solucionModa;

function agrupar(array){
    array.map(
        function(elemento){
            if (agrupado[elemento]){
                agrupado[elemento] += 1;
            }else{
                agrupado[elemento] = 1;
            }
        }
    );
}

function arrayAgrupado (objeto){
    agrupadoArray = Object.entries(objeto);
    ordenadoAgrupadoArray = agrupadoArray;
}

function ordenar (objetoArray){
    objetoArray.sort(function menorAMayor (a,b){
            return a[1] - b[1];
        });
}

function resolverModa (arrayOrdenado){
    
    solucionModa = arrayOrdenado[(arrayOrdenado.length) - 1];
    
    return solucionModa;
}

// Codigo ejecutable

function CalcularModa(){
    agrupar(lista);
    arrayAgrupado(agrupado);
    ordenar(agrupadoArray);

    resolverModa(ordenadoAgrupadoArray);
    return solucionModa;
}