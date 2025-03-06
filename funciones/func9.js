//Verificar si un número es palindrómico

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número: ', function(numero) {
  const esPalindromo = numero.toString() === numero.toString().split('').reverse().join('');
  console.log(`¿Es palíndromo? ${esPalindromo}`);
  readline.close();
});