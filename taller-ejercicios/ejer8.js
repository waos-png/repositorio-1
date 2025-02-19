//Costos de gimnasio según mensualidad

let dias = 30;
let costo;

if (dias === 15) {
    costo = 18000;
} else if (dias === 30) {
    costo = 35000;
} else if (dias === 90) {
    costo = 86000;
} else {
    costo = "No válido";
}

console.log(`El costo por ${dias} días es: $${costo}.`);