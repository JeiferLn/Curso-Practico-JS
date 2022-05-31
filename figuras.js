// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado*4;
}


function areaCuadrado(lado){
    return lado*lado;
}


// Codigo del triangulo


function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base * altura)/2;
}


// Circulo


const PI = Math.PI

function diametrocirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametrocirculo(radio);
    return PI*diametro;
}

function areaCirculo(radio){
    return PI * (radio*radio);
}
