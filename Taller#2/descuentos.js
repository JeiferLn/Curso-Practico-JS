// const precioOriginal = 120;
// const Descuento = 15;

// const porcentajeconDescuento = 100 - Descuento;
// const precioconDescuento = (precioOriginal * porcentajeconDescuento)/100;

// console.log({
//     precioOriginal,
//     Descuento,
//     porcentajeconDescuento,
//     precioconDescuento
// });

function PrecioPagar (precio,descuento){
    const porcentajeconDescuento = 100 - descuento;
    const precioconDescuento = (precio*porcentajeconDescuento)/100;
   
    return precioconDescuento;
}

// Funcion del HTML 

function CalcularPrecio(){
    const inputPrice = document.getElementById('InputPrice');
    const PriceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById('InputDiscount');
    const discountValue = inputDiscount.value;

    const precioFinal = PrecioPagar(PriceValue, discountValue)

    const resultP = document.getElementById('ResultP');
    resultP.innerText = 'El precio a pagar es de: $'+precioFinal;
}