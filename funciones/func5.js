//Invertir una cadena de texto

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa una cadena: ', function(cadena) {
  console.log(`Cadena invertida: ${cadena.split('').reverse().join('')}`);
  readline.close();
});