//Verificar si un número es palindrómico

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function esPalindromo(numero) {
    const cadena = numero.toString();
    return cadena === cadena.split('').reverse().join('');
  }
  
  readline.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      console.log(`¿Es ${num} palíndromo? ${esPalindromo(num)}`);
    }
    readline.close();
  });