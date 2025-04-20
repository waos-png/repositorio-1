//Cola de Atención de Clientes en Supermercado con Map

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const capacidadCola = 7;
const colaClientes = [];

function mostrarMenu() {
    console.log('\n----------------');
    console.log('1. Agregar cliente a la cola');
    console.log('2. Atender siguiente cliente');
    console.log('3. Ver cola de clientes');
    console.log('4. Salir');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': agregarCliente(); break;
            case '2': atenderCliente(); break;
            case '3': verCola(); break;
            case '4': rl.close(); break;
            default: console.log('Opción inválida.'); mostrarMenu();
        }
    });
}

function agregarCliente() {
    if (colaClientes.length < capacidadCola) {
        rl.question('Ingrese el nombre del cliente: ', (nombre) => {
            colaClientes.push(nombre);
            console.log(`\nCliente "${nombre}" agregado a la cola.`);
            mostrarMenu();
        });
    } else {
        console.log('\nLa cola está llena. No se pueden agregar más clientes.');
        mostrarMenu();
    }
}

function atenderCliente() {
    if (colaClientes.length > 0) {
        const clienteAtendido = colaClientes.shift();
        console.log(`\nCliente "${clienteAtendido}" ha sido atendido.`);
    } else {
        console.log('\nNo hay clientes en la cola.');
    }
    mostrarMenu();
}

function verCola() {
    if (colaClientes.length === 0) {
        console.log('\nLa cola está vacía.');
    } else {
        console.log('\nClientes en la cola:');
        colaClientes.map((cliente, index) => {
            console.log(`${index + 1}. ${cliente}`);
        });
    }
    mostrarMenu();
}

console.log('Bienvenido al Sistema de Cola de Supermercado');
mostrarMenu();