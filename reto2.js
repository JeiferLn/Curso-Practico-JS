function precioTotal(precio,descuento,cuponDescuento){
    
    switch(cuponDescuento){
        case 10:
            var descuento2 = 10;
            break

        case 20:
            var descuento2 = 20;
            break

        case 50:
            var descuento2 = 50;
            break
        
        default:
            var descuento2 = 0;
    }
    const nDescuento = descuento + descuento2;

    const PrecioT = (precio * (100 - nDescuento))/100;
    
    return PrecioT;
}