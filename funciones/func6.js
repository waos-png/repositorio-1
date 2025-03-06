//Calcular el máximo común divisor de dos números

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa el primer número: ', function(a) {
  readline.question('Ingresa el segundo número: ', function(b) {
    while (b !== 0) [a, b] = [b, a % b];
    console.log(`MCD: ${a}`);
    readline.close();
  });
});