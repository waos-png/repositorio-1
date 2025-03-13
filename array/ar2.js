const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;
const transacciones = [];

function mostrarMenu() {
    console.log('\n----------------');
    console.log('1. Consultar saldo');
    console.log('2. Depositar dinero');
    console.log('3. Retirar dinero');
    console.log('4. Ver últimas transacciones');
    console.log('5. Salir');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': consultarSaldo(); break;
            case '2': depositarDinero(); break;
            case '3': retirarDinero(); break;
            case '4': verTransacciones(); break;
            case '5': rl.close(); break;
            default: console.log('Opción inválida.'); mostrarMenu();
        }
    });
}

function consultarSaldo() {
    console.log(`\nSu saldo actual es: $${saldo}`);
    mostrarMenu();
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
        mostrarMenu();
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
        mostrarMenu();
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
    mostrarMenu();
}

console.log('Bienvenido al Cajero Automático');
mostrarMenu();