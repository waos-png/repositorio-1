const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let habitaciones = [null, 0, 0, 0, 0, 0]; // Índices 1-5

function mostrarHabitaciones() {
    console.log('Estado de las habitaciones:');
    for (let i = 1; i <= 5; i++) {
        console.log(`Habitación ${i}: ${habitaciones[i] === 0 ? 'Vacía' : 'Ocupada'}`);
    }
    console.log('\n----------------\n'); 
}

function reservarHabitacion() {
    rl.question('Ingrese el número de la habitación a reservar (1-5): ', (numero) => {
        numero = parseInt(numero);
        if (numero >= 1 && numero <= 5) {
            if (habitaciones[numero] === 0) {
                habitaciones[numero] = 1;
                console.log('Habitación reservada');
            } else {
                console.log('Habitación ocupada');
            }
        } else {
            console.log('Número de habitación inválido. Debe ser entre 1 y 5.');
        }
        console.log('\n----------------\n'); 
        mostrarHabitaciones();
        mostrarMenu();
    });
}

function liberarHabitacion() {
    rl.question('Ingrese el número de la habitación a liberar (1-5): ', (numero) => {
        numero = parseInt(numero);
        if (numero >= 1 && numero <= 5) {
            if (habitaciones[numero] === 1) {
                habitaciones[numero] = 0;
                console.log('Habitación liberada');
            } else {
                console.log('Habitación ya está vacía');
            }
        } else {
            console.log('Número de habitación inválido. Debe ser entre 1 y 5.');
        }
        console.log('\n----------------\n');
        mostrarHabitaciones();
        mostrarMenu();
    });
}

function mostrarMenu() {
    rl.question(
        '1. Reservar habitación\n2. Liberar habitación\n3. Mostrar habitaciones\n4. Salir\nSeleccione una opción: ',
        (opcion) => {
            switch (opcion) {
                case '1':
                    reservarHabitacion();
                    break;
                case '2':
                    liberarHabitacion();
                    break;
                case '3':
                    mostrarHabitaciones();
                    mostrarMenu();
                    break;
                case '4':
                    rl.close();
                    break;
                default:
                    console.log('Opción inválida');
                    console.log('\n----------------\n');
                    mostrarMenu();
            }
        }
    );
}

mostrarMenu();