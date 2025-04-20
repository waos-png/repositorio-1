// Organizar puntajes en Map y agregar nuevo puntaje 

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const puntajes = [85, 92, 78, 95, 88];
const puntajesMap = new Map();
puntajes.forEach((puntaje, index) => puntajesMap.set(index, puntaje));

readline.question('Ingrese nuevo puntaje: ', (puntaje) => {
  const nuevoPuntaje = parseInt(puntaje);
  const nuevoIndice = puntajes.length;
  puntajesMap.set(nuevoIndice, nuevoPuntaje);
  console.log('Puntajes actualizados:', puntajesMap);
  readline.close();
});