

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

const searchProducts = listProducts => {
    for ( const values of listProducts ) {
        if ( values.includes('Camiseta') === true )  console.log(values);
     }
}

searchProducts( products );