//Agregar nuevo asistente al Map
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const asistentes = new Map([[1, "Ana"], [2, "Luis"]]);
  
  readline.question('Ingrese ID y nombre del asistente (ej. 3,Sofía): ', (input) => {
    const [id, nombre] = input.split(',');
    asistentes.set(parseInt(id), nombre);
    console.log('Asistentes actualizados:', asistentes);
    readline.close();
  });
  