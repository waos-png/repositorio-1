//Calcular el factorial de un número

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', function(numero) {
  let resultado = 1;
  for (let i = 2; i <= numero; i++) resultado *= i;
  console.log(`Factorial de ${numero}: ${resultado}`);
  readline.close();
});