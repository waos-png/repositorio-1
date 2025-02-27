//Generar una serie de Fibonacci hasta un límite

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function fibonacci(n) {
    const serie = [0, 1];
    for (let i = 2; i < n; i++) {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie.slice(0, n);
  }
  
  readline.question('Ingresa el número de términos de la serie Fibonacci: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num) || num < 1) {
      console.log('Por favor, ingresa un número válido mayor que 0.');
    } else {
      console.log(`Serie Fibonacci de ${num} términos: ${fibonacci(num)}`);
    }
    readline.close();
  });