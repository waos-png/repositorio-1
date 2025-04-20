//Filtrar códigos de libros mayores a 50

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const codigosLibros = [10, 25, 60, 45, 80, 15, 70];
  
  readline.question('Filtrar códigos mayores a: ', (valor) => {
    const limite = parseInt(valor);
    const filtrados = codigosLibros.filter(codigo => codigo > limite);
    console.log(`Códigos mayores a ${limite}:`, filtrados);
    readline.close();
  });