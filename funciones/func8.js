//Calcular la potencia de un número

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
      resultado *= base;
    }
    return resultado;
  }
  
  readline.question('Ingresa la base: ', (base) => {
    readline.question('Ingresa el exponente: ', (exponente) => {
      const b = parseInt(base);
      const e = parseInt(exponente);
      if (isNaN(b) || isNaN(e)) {
        console.log('Por favor, ingresa números válidos.');
      } else {
        console.log(`${b} elevado a ${e} es: ${potencia(b, e)}`);
      }
      readline.close();
    });
  });