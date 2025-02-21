//Verificar si tres ángulos forman un triángulo válido con menu

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarTriangulo(angulo1, angulo2, angulo3) {
    if (angulo1 + angulo2 + angulo3 === 180) {
        console.log("Los ángulos forman un triángulo válido.");
    } else {
        console.log("Los ángulos NO forman un triángulo válido.");
    }
    mostrarMenu();
}

function mostrarMenu() {
    console.log("1. Verificar si tres ángulos forman un triángulo válido");
    console.log("2. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
        if (opcion === "1") {
            rl.question("Ingrese el primer ángulo: ", (angulo1) => {
                rl.question("Ingrese el segundo ángulo: ", (angulo2) => {
                    rl.question("Ingrese el tercer ángulo: ", (angulo3) => {
                        verificarTriangulo(
                            parseFloat(angulo1),
                            parseFloat(angulo2),
                            parseFloat(angulo3)
                        );
                    });
                });
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