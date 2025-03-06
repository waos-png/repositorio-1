//Contar las vocales en una cadena de texto

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa una cadena: ', function(cadena) {
  const vocales = cadena.match(/[aeiouAEIOU]/g);
  console.log(`Número de vocales: ${vocales ? vocales.length : 0}`);
  readline.close();
});