const lista = [
    {nombre: 'Calculo Vectorial', creditos: 4, nota1: 3.4, nota2: 4.2, nota3: 4, examenFinal: 3},
    {nombre: 'Etica Profecional', creditos: 2, nota1: 5 , nota2: 5, nota3: 5, examenFinal: 3},
    {nombre: 'Metodologia de la Investigacion', creditos: 2, nota1: 5 , nota2: 5, nota3: 5, examenFinal: 5},
    {nombre: 'Probabilidad y Estadistica', creditos: 3, nota1: 4.6 , nota2: 4, nota3: 4, examenFinal: 3},
]

const promedioAnterior = 3.99;


function promedioNotas (promedio = 0, promedioAcumulado = 0){
    lista.map(function(notas){
        promedio = (((((notas.nota1 + notas.nota2 + notas.nota3)/3)*0.7) + ((notas.examenFinal)*0.3)) * notas.creditos);
        promedioAcumulado += promedio;
    });
    return promedioAcumulado
}

function creditos (sumaCreditos = 0){
    lista.map(function(credito){
        sumaCreditos += credito.creditos;
    });
    return sumaCreditos; 
}

function calcularMedia (promedioFinal = 0){
    promedioFinal = promedioNotas()/creditos();
    return promedioFinal;
}

function promedioPonderado(ponderado = 0){
    ponderado = (calcularMedia()+ promedioAnterior)/2;
    return ponderado
}

