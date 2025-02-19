//Cálculo de costo de servicios de telefonía

let operador = "Tigo";
let minutos = 10;
let costoFijo, costoMinuto, costoDatos;

if (operador === "Tigo") {
    costoFijo = 45000;
    costoMinuto = 200;
    costoDatos = 12000;
} else if (operador === "Claro") {
    costoFijo = 30000;
    costoMinuto = 100;
    costoDatos = 18000;
} else if (operador === "Movistar") {
    costoFijo = 40000;
    costoMinuto = 250;
    costoDatos = 8000;
}

let total = costoFijo + (minutos * costoMinuto) + costoDatos;
console.log(`Costo total: $${total}.`);