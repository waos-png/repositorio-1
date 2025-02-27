//Calcular la suma de dígitos de un número

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumaDigitos(numero) {
    let suma = 0;
    while (numero > 0) {
      suma += numero % 10;
      numero = Math.floor(numero / 10);
    }
    return suma;
  }
  
  readline.question('Ingresa un número entero: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      console.log(`La suma de los dígitos de ${num} es: ${sumaDigitos(num)}`);
    }
    readline.close();
  });