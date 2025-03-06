//Calcular la suma de dígitos de un número

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', function(numero) {
  let suma = 0;
  while (numero > 0) {
    suma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  console.log(`Suma de dígitos: ${suma}`);
  readline.close();
});