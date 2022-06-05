function validacionPrestamo (nombre,prestamo,cCuotas){
    if(prestamo <= 20000){

        const rPrestamo = document.getElementById('respuesta1');
        rPrestamo.innerText = 'Querido cliente ('+nombre+'). Su solicitud de prestamo de $'+prestamo+' ha sido aprovado con un interes del '+ totalInteres(prestamo,cCuotas)+'% dando un total a devolver de $'+totalPrestamo(prestamo,cCuotas)+' a '+cCuotas+' cuotas. Por lo tanto debera pagar $'+totalPorCuota (prestamo, cCuotas)+' anualmente durante los siguentes '+cCuotas+' años';

    }else{

        const rPrestamo = document.getElementById('respuesta2');
        rPrestamo.innerText = 'Por el momento solo otorgamos prestamos menores a 20.000';

    }
}



function porcentajeInteres (prestamo){
    if(prestamo >= 10000){
        return 10;
    }else{
        return 5;
    }
}

function interesCuotas (cCuotas){
    const interesAdicional = 5 * (cCuotas - 1);
    return interesAdicional;
}

function totalInteres(prestamo,cCuotas){
    const interes = porcentajeInteres(prestamo) + interesCuotas(cCuotas);
    return interes;
}




function totalPrestamo (prestamo, cCuotas){
    const totalAPagarIntereses = (prestamo * totalInteres(prestamo,cCuotas))/100 

    const total = prestamo + totalAPagarIntereses;

    return total 
}

function totalPorCuota (prestamo, cCuotas){
    const cPorCuota = totalPrestamo(prestamo, cCuotas) / cCuotas;
    return cPorCuota;
}



// Codigo HTML

function procesarEntradas (){
    const inputName = document.getElementById('name');
    const nameValue = String(inputName.value);
    
    const inputLoan = document.getElementById('loan');
    const loanValue = parseInt(inputLoan.value);

    const inputDues = document.getElementById('dues');
    const duesValue = parseInt(inputDues.value);

    validacionPrestamo(nameValue,loanValue,duesValue);
}