// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado*4;
}


function areaCuadrado(lado){
    return lado*lado;
}


// Codigo del triangulo


function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
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

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert('El perimetro del cuadrado es: '+perimetro);
}

function calcularAreaoCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const lado = input.value;
    const area = areaCuadrado(lado);
    alert('El area del cuadrado es: '+area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('InputTriangulo1');
    const input2 = document.getElementById('InputTriangulo2');
    const input3 = document.getElementById('InputTriangulo3');

    const lado1 = parseInt(input1.value);
    const lado2 = parseInt(input2.value);
    const base = parseInt(input3.value);

    const perimetroT = perimetroTriangulo(lado1, lado2, base);
    alert('El perimetro del triangulo es: '+perimetroT);
}

function calcularAreaTriangulo(){
    const input4 = document.getElementById('InputTriangulo4');
    const input3 = document.getElementById('InputTriangulo3');

    const altura = input4.value;
    const base = input3.value;

    const area = (base*altura)/2
    alert('El area del triangulo es: '+area)
}

function calcularPerimeCirculo(){
    const input = document.getElementById('InputCirculo');
    const radio = input.value;

    const perimetroC = perimetroCirculo(radio);
    alert('El perimetro del circulo es: '+perimetroC);
}

function calcularAreaCirculo(){
    const input = document.getElementById('InputCirculo');
    const radio = input.value;

    const area = areaCirculo(radio);
    alert('El area del circulo es: '+area);
}