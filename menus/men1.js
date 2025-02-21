// calculo del salario por horas mediante menu interactivo


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSalario(nombre, horas) {
    let salario;

    if (horas <= 10) {
        salario = horas * 30000;
    } else {
        salario = horas * 33000;
    }

    console.log(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
    mostrarMenu();
}

function mostrarMenu() {
    console.log("1. Calcular salario");
    console.log("2. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
        if (opcion === "1") {
            rl.question("Ingrese el nombre del empleado: ", (nombre) => {
                rl.question("Ingrese las horas trabajadas: ", (horas) => {
                    calcularSalario(nombre, parseInt(horas));
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

mostrarMenu(); 