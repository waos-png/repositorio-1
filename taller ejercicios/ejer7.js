//Ayudas económicas según género y edad

let genero = "femenino";
let edad = 35;
let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else {
    ayuda = 40000;
}

console.log(`El valor de ayuda mensual es: $${ayuda}.`);