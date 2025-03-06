//Generar una serie de Fibonacci hasta un límite

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa el número de términos: ', function(n) {
  const serie = [0, 1];
  for (let i = 2; i < n; i++) serie.push(serie[i - 1] + serie[i - 2]);
  console.log(`Fibonacci: ${serie}`);
  readline.close();
});