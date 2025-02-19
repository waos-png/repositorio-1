//Cálculo de costo de un sándwich

let tamaño = "grande";
let ingredientes = ["tocineta", "queso"];
let costoBase = tamaño === "pequeño" ? 6000 : 12000;
let costoIngredientes = 0;

if (ingredientes.includes("tocineta")) costoIngredientes += 3000;
if (ingredientes.includes("pavo")) costoIngredientes += 3000;
if (ingredientes.includes("queso")) costoIngredientes += 2500;

let total = costoBase + costoIngredientes;
console.log(`Costo total del sándwich: $${total}.`);