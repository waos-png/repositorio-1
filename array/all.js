const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables globales para cada sistema
let saldo = 1000; // Cajero Automático
const transacciones = []; // Cajero Automático
const capacidadCola = 7; // Cola de Atención
const colaClientes = []; // Cola de Atención
const productos = ['Dulce', 'Gaseosa', 'Chocolate', 'Galleta', 'Jugo']; // Máquina Expendedora
const cantidades = [5, 3, 2, 4, 1]; // Máquina Expendedora
const precio = 1; // Máquina Expendedora
let habitaciones = [0, 0, 0, 0, 0]; // Gestión de Habitaciones (0 = vacía, 1 = ocupada)

// Menú Principal
function mostrarMenuPrincipal() {
    console.log('\n=== Menú Principal ===');
    console.log('1. Cajero Automático');
    console.log('2. Cola de Atención en Supermercado');
    console.log('3. Máquina Expendedora');
    console.log('4. Gestión de Habitaciones');
    console.log('5. Salir');
    console.log('======================\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': iniciarCajero(); break;
            case '2': iniciarCola(); break;
            case '3': iniciarMaquina(); break;
            case '4': iniciarHabitaciones(); break;
            case '5': rl.close(); break;
            default: console.log('Opción inválida.'); mostrarMenuPrincipal();
        }
    });
}

// Cajero Automático
function iniciarCajero() {
    console.log('\n=== Cajero Automático ===');
    mostrarMenuCajero();
}

function mostrarMenuCajero() {
    console.log('\n----------------');
    console.log('1. Consultar saldo');
    console.log('2. Depositar dinero');
    console.log('3. Retirar dinero');
    console.log('4. Ver últimas transacciones');
    console.log('5. Volver al menú principal');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': consultarSaldo(); break;
            case '2': depositarDinero(); break;
            case '3': retirarDinero(); break;
            case '4': verTransacciones(); break;
            case '5': mostrarMenuPrincipal(); break;
            default: console.log('Opción inválida.'); mostrarMenuCajero();
        }
    });
}

function consultarSaldo() {
    console.log(`\nSu saldo actual es: $${saldo}`);
    mostrarMenuCajero();
}

function depositarDinero() {
    rl.question('Ingrese el monto a depositar: ', (monto) => {
        monto = parseFloat(monto);
        if (monto > 0) {
            saldo += monto;
            registrarTransaccion(monto);
            console.log(`\nDepósito exitoso. Su nuevo saldo es: $${saldo}`);
        } else {
            console.log('\nMonto inválido.');
        }
        mostrarMenuCajero();
    });
}

function retirarDinero() {
    rl.question('Ingrese el monto a retirar: ', (monto) => {
        monto = parseFloat(monto);
        if (monto > 0 && monto <= 500) {
            if (monto <= saldo) {
                saldo -= monto;
                registrarTransaccion(-monto);
                console.log(`\nRetiro exitoso. Su nuevo saldo es: $${saldo}`);
            } else {
                console.log('\nFondos insuficientes.');
            }
        } else {
            console.log('\nMonto inválido. El retiro máximo es $500.');
        }
        mostrarMenuCajero();
    });
}

function registrarTransaccion(monto) {
    if (transacciones.length >= 5) transacciones.shift();
    transacciones.push(monto);
}

function verTransacciones() {
    if (transacciones.length === 0) {
        console.log('\nNo hay transacciones registradas.');
    } else {
        console.log('\nÚltimas 5 transacciones:');
        transacciones.forEach((transaccion, index) => {
            const tipo = transaccion >= 0 ? 'Depósito' : 'Retiro';
            console.log(`${index + 1}. ${tipo}: $${Math.abs(transaccion)}`);
        });
    }
    mostrarMenuCajero();
}

// Cola de Atención en Supermercado
function iniciarCola() {
    console.log('\n=== Cola de Atención en Supermercado ===');
    mostrarMenuCola();
}

function mostrarMenuCola() {
    console.log('\n----------------');
    console.log('1. Agregar cliente a la cola');
    console.log('2. Atender siguiente cliente');
    console.log('3. Ver cola de clientes');
    console.log('4. Volver al menú principal');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': agregarCliente(); break;
            case '2': atenderCliente(); break;
            case '3': verCola(); break;
            case '4': mostrarMenuPrincipal(); break;
            default: console.log('Opción inválida.'); mostrarMenuCola();
        }
    });
}

function agregarCliente() {
    if (colaClientes.length < capacidadCola) {
        rl.question('Ingrese el nombre del cliente: ', (nombre) => {
            colaClientes.push(nombre);
            console.log(`\nCliente "${nombre}" agregado a la cola.`);
            mostrarMenuCola();
        });
    } else {
        console.log('\nLa cola está llena. No se pueden agregar más clientes.');
        mostrarMenuCola();
    }
}

function atenderCliente() {
    if (colaClientes.length > 0) {
        const clienteAtendido = colaClientes.shift();
        console.log(`\nCliente "${clienteAtendido}" ha sido atendido.`);
    } else {
        console.log('\nNo hay clientes en la cola.');
    }
    mostrarMenuCola();
}

function verCola() {
    if (colaClientes.length === 0) {
        console.log('\nLa cola está vacía.');
    } else {
        console.log('\nClientes en la cola:');
        colaClientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente}`);
        });
    }
    mostrarMenuCola();
}

// Máquina Expendedora
function iniciarMaquina() {
    console.log('\n=== Máquina Expendedora ===');
    mostrarMenuMaquina();
}

function mostrarMenuMaquina() {
    console.log('\n----------------');
    console.log('1. Mostrar inventario');
    console.log('2. Comprar producto');
    console.log('3. Volver al menú principal');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': mostrarInventario(); break;
            case '2': comprarProducto(); break;
            case '3': mostrarMenuPrincipal(); break;
            default: console.log('Opción inválida.'); mostrarMenuMaquina();
        }
    });
}

function mostrarInventario() {
    console.log('\nInventario de productos:');
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}: ${cantidades[index]} unidades`);
    });
    mostrarMenuMaquina();
}

function comprarProducto() {
    rl.question('Ingrese el código del producto (1-5): ', (codigo) => {
        codigo = parseInt(codigo) - 1;

        if (codigo >= 0 && codigo < productos.length) {
            if (cantidades[codigo] > 0) {
                rl.question('Inserte $1 para comprar: ', (pago) => {
                    if (parseFloat(pago) === precio) {
                        cantidades[codigo]--;
                        console.log(`\nProducto "${productos[codigo]}" entregado.`);
                    } else {
                        console.log('\nPago incorrecto. Se requiere $1.');
                    }
                    mostrarMenuMaquina();
                });
            } else {
                console.log(`\nProducto "${productos[codigo]}" agotado.`);
                sugerirProducto();
            }
        } else {
            console.log('\nCódigo de producto inválido.');
            mostrarMenuMaquina();
        }
    });
}

function sugerirProducto() {
    const productoDisponible = productos.find((_, index) => cantidades[index] > 0);
    if (productoDisponible) {
        console.log(`¿Qué tal un "${productoDisponible}"?`);
    } else {
        console.log('Lo sentimos, no hay productos disponibles.');
    }
    mostrarMenuMaquina();
}

// Gestión de Habitaciones
function iniciarHabitaciones() {
    console.log('\n=== Gestión de Habitaciones ===');
    mostrarMenuHabitaciones();
}

function mostrarMenuHabitaciones() {
    console.log('\n----------------');
    console.log('1. Mostrar estado de habitaciones');
    console.log('2. Reservar habitación');
    console.log('3. Liberar habitación');
    console.log('4. Volver al menú principal');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': mostrarHabitaciones(); break;
            case '2': reservarHabitacion(); break;
            case '3': liberarHabitacion(); break;
            case '4': mostrarMenuPrincipal(); break;
            default: console.log('Opción inválida.'); mostrarMenuHabitaciones();
        }
    });
}

function mostrarHabitaciones() {
    console.log('\nEstado de las habitaciones:');
    habitaciones.forEach((estado, index) => {
        console.log(`Habitación ${index + 1}: ${estado === 0 ? 'Vacía' : 'Ocupada'}`);
    });
    mostrarMenuHabitaciones();
}

function reservarHabitacion() {
    rl.question('Ingrese el número de la habitación a reservar (1-5): ', (numero) => {
        numero = parseInt(numero) - 1;
        if (numero >= 0 && numero < habitaciones.length) {
            if (habitaciones[numero] === 0) {
                habitaciones[numero] = 1;
                console.log('\nHabitación reservada.');
            } else {
                console.log('\nHabitación ocupada.');
            }
        } else {
            console.log('\nNúmero de habitación inválido.');
        }
        mostrarHabitaciones();
    });
}

function liberarHabitacion() {
    rl.question('Ingrese el número de la habitación a liberar (1-5): ', (numero) => {
        numero = parseInt(numero) - 1;
        if (numero >= 0 && numero < habitaciones.length) {
            if (habitaciones[numero] === 1) {
                habitaciones[numero] = 0;
                console.log('\nHabitación liberada.');
            } else {
                console.log('\nHabitación ya está vacía.');
            }
        } else {
            console.log('\nNúmero de habitación inválido.');
        }
        mostrarHabitaciones();
    });
}

// Iniciar el programa
console.log('Bienvenido al Sistema Integrado');
mostrarMenuPrincipal();