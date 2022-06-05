//Helpers

function medianaSalariosCol(lista){
    const mitad = parseInt((lista.length + 1)/2)
    
    if (par(lista.length)){
        const promedio1 = (lista[mitad]+lista[mitad-1])/2;
        return promedio1;
    }else{
        const promedio2 = lista[mitad];
        return promedio2
    }
}    

function par(numero){
    return (numero % 2 === 0);
}

//Mediana General

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salariosColSorted = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);


const medianaGeneralCol = medianaSalariosCol(salariosColSorted); 

//Mediana del top 10

const spliceStart = parseInt((salariosColSorted.length * 90)/100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount); 

const medianaColTop10 = medianaSalariosCol(salariosColTop10); 

//Diferencia

const diferencia = medianaColTop10 - medianaGeneralCol;

console.log(diferencia);