//Calcular la suma de los divisores de un número

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', function(numero) {
  let suma = 0;
  for (let i = 1; i < numero; i++) if (numero % i === 0) suma += i;
  console.log(`Suma de divisores: ${suma}`);
  readline.close();
});