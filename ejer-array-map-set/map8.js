//Agregar nuevo proyecto al arreglo

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const proyectos = [
    new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
  ];
  
  readline.question('Ingrese nombre y presupuesto del nuevo proyecto (ej. ProyectoC,6000): ', (input) => {
    const [nombre, presupuesto] = input.split(',');
    const nuevoProyecto = new Map([["nombre", nombre], ["presupuesto", parseInt(presupuesto)]]);
    proyectos.push(nuevoProyecto);
    console.log('Proyectos actualizados:', proyectos);
    readline.close();
  });