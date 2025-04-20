// Verificar códigos de productos vendidos 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const productosVendidos = new Set([1001, 1002, 1003]);
  
  readline.question('Verificar si el código está vendido: ', (codigo) => {
    const cod = parseInt(codigo);
    const vendido = productosVendidos.has(cod);
    console.log(`¿El producto ${cod} fue vendido hoy?`, vendido);
    readline.close();
  });