// Codigo del cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;

console.log(
    'los lados del cuadrado miden: '
    +ladoCuadrado+ 
    'cm'
);

const perimetroCuadrado = ladoCuadrado * 4;

console.log(
    'El perimetro del cuadrado es: '
    +perimetroCuadrado+ 
    'cm²'
);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log(
    'El área del cuadrado es: '
    +areaCuadrado+ 
    'cm²'
);

console.groupEnd();



// Codigo del triangulo

console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const BaseTriangulo = 4;

console.log(
    'Los lados de los triangulos miden: '
    +ladoTriangulo1+
    'cm, '
    +ladoTriangulo2+
    'cm, '
    +BaseTriangulo+
    'cm'
);

const alturaTriangulo = 5.5;

console.log(
    'La altura del triangulo es: '
    +alturaTriangulo+
    'cm'
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;

console.log(
    'El perimetro del triangulo es: '
    +perimetroTriangulo+
    'cm'
);

const areaTriangulo = (BaseTriangulo*alturaTriangulo)/2;

console.log(
    'El area del triangulo es: '
    +areaTriangulo+
    'cm²'
);
console.groupEnd();

// Circulo

console.group('Circulo');

const r = 4;
const pi = Math.PI;

console.log(
    'El radio del circulo es: '
    +r+
    'cm'
);

const perimetroCirculo = pi * (r * 2);

console.log(
    'El perimetro del circulo es: '
    +perimetroCirculo+
    ' cm'
);

const areaCirculo = pi * (r*r);

console.log(
    'El area del circulo es: '
    +areaCirculo+
    ' cm²'
);

console.groupEnd();