//Verificar precios mayores a 1000

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const preciosProductos = [500, 1200, 300, 1500, 800];
  
  readline.question('Verificar precios mayores a: ', (valor) => {
    const limite = parseInt(valor);
    const hayCaros = preciosProductos.some(precio => precio > limite);
    console.log(`¿Hay precios mayores a ${limite}?`, hayCaros);
    readline.close();
  });