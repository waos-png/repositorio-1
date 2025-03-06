//Calcular la potencia de un número

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa la base: ', function(base) {
  readline.question('Ingresa el exponente: ', function(exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) resultado *= base;
    console.log(`Potencia: ${resultado}`);
    readline.close();
  });
});