//Calcular el factorial de un número

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  readline.question('Ingresa un número entero positivo: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num) || num < 0) {
      console.log('Por favor, ingresa un número entero positivo válido.');
    } else {
      const resultado = calcularFactorial(num);
      console.log(`El factorial de ${num} es: ${resultado}`);
    }
    readline.close();
  });