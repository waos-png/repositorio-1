//Calcular el máximo común divisor de dos números

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function mcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  readline.question('Ingresa el primer número: ', (num1) => {
    readline.question('Ingresa el segundo número: ', (num2) => {
      const a = parseInt(num1);
      const b = parseInt(num2);
      if (isNaN(a) || isNaN(b)) {
        console.log('Por favor, ingresa números válidos.');
      } else {
        console.log(`El MCD de ${a} y ${b} es: ${mcd(a, b)}`);
      }
      readline.close();
    });
  });