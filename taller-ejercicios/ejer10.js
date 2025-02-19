//Cálculo de costo de impresión de copias

let copias = 600;
let precioPorCopia;
let total;

if (copias < 500) {
    precioPorCopia = 120;
} else if (copias < 750) {
    precioPorCopia = 100;
} else if (copias < 1000) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

total = copias * precioPorCopia;
console.log(`Precio por copia: $${precioPorCopia}. Total: $${total}.`);