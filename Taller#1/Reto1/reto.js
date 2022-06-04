function AlturaTriangulo(lado1,lado2,Base){
    if(lado1 == lado2){
        const base = Base/2
        const Altura = Math.sqrt((lado1**2)-(base**2),2);
    
        return 'La altura del triangulo isoceles es: '+Altura;

    }else{
        return 'Este triangulo no es isóceles';
    }
}

//Aplicado en HTML

function calcularAltura(){
    const ladon1 = document.getElementById('input1');
    const ladon2 = document.getElementById('input2');
    const basen = document.getElementById('input3');

    const value1 = Number(ladon1.value);
    const value2 = Number(ladon2.value);
    const value3 = Number(basen.value);
    
    const inicio = AlturaTriangulo(value1,value2,value3);

    alert(inicio);
}