// Verificar si un número es positivo, negativo o cero usando menu
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumero(numero) {
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
    mostrarMenu();
}

function mostrarMenu() {
    console.log("1. Verificar si un número es positivo, negativo o cero");
    console.log("2. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
        if (opcion === "1") {
            rl.question("Ingrese un número: ", (numero) => {
                verificarNumero(parseFloat(numero));
            });
        } else if (opcion === "2") {
            console.log("Saliendo del programa...");
            rl.close();
        } else {
            console.log("Opción no válida. Intente de nuevo.");
            mostrarMenu();
        }
    });
}

mostrarMenu(); // Iniciar el menú