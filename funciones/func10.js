//Calcular la suma de los divisores de un número

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function sumaDivisores(numero) {
    let suma = 0;
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) suma += i;
    }
    return suma;
  }
  
  readline.question('Ingresa un número: ', (numero) => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      console.log('Por favor, ingresa un número válido.');
    } else {
      console.log(`La suma de los divisores de ${num} es: ${sumaDivisores(num)}`);
    }
    readline.close();
  });