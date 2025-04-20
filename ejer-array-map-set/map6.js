//. Agregar nuevo socio al Set

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const sociosActivos = new Set([5001, 5002, 5003]);
  
  readline.question('Ingrese ID del nuevo socio: ', (id) => {
    const nuevoId = parseInt(id);
    sociosActivos.add(nuevoId);
    console.log('Socios actualizados:', sociosActivos);
    readline.close();
  });