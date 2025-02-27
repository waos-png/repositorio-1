//Invertir una cadena de texto

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function invertirCadena(cadena) {
    let invertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
      invertida += cadena[i];
    }
    return invertida;
  }
  
  readline.question('Ingresa una cadena de texto: ', (cadena) => {
    console.log(`Cadena invertida: ${invertirCadena(cadena)}`);
    readline.close();
  });