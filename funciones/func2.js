//Verificar si un número es primo

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  readline.question('Ingresa un número entero: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      console.log(`¿Es ${num} primo? ${esPrimo(num)}`);
    }
    readline.close();
  });