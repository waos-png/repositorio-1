//Contar las vocales en una cadena de texto

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let contador = 0;
    for (let char of cadena) {
      if (vocales.includes(char)) contador++;
    }
    return contador;
  }
  
  readline.question('Ingresa una cadena de texto: ', (cadena) => {
    console.log(`Número de vocales: ${contarVocales(cadena)}`);
    readline.close();
  });