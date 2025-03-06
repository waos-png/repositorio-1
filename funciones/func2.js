//Verificar si un número es primo

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', function(numero) {
  let esPrimo = true;
  for (let i = 2; i < numero; i++) if (numero % i === 0) esPrimo = false;
  console.log(`¿Es ${numero} primo? ${esPrimo}`);
  readline.close();
});