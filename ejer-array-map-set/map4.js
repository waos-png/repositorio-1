//Verificar acceso por código

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const registrados = new Map([[101, "Carlos"], [102, "María"], [103, "José"]]);
  
  readline.question('Ingrese código para verificar acceso: ', (codigo) => {
    const tieneAcceso = registrados.has(parseInt(codigo));
    console.log(`¿Acceso permitido para código ${codigo}?`, tieneAcceso);
    readline.close();
  });