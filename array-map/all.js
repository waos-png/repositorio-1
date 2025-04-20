//integracion de los 4 ejercicios sin utilizar Map

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Sistema de Cajero Automático
const cajero = {
    saldo: 1000,
    transacciones: [],
    consultarSaldo() {
        console.log(`\nSu saldo actual es: $${this.saldo.toFixed(2)}`);
        this.mostrarMenu();
    },
    depositarDinero() {
        rl.question('Ingrese el monto a depositar: ', (monto) => {
            monto = parseFloat(monto);
            if (isNaN(monto) || monto <= 0) {
                console.log('\nError: Debe ingresar un monto válido mayor que cero.');
                return this.mostrarMenu();
            }
            
            this.saldo += monto;
            this.registrarTransaccion(monto);
            console.log(`\nDepósito exitoso. Su nuevo saldo es: $${this.saldo.toFixed(2)}`);
            this.mostrarMenu();
        });
    },
    retirarDinero() {
        rl.question('Ingrese el monto a retirar: ', (monto) => {
            monto = parseFloat(monto);
            
            if (isNaN(monto)) {
                console.log('\nError: Debe ingresar un número válido.');
                return this.mostrarMenu();
            }
            
            if (monto <= 0) {
                console.log('\nError: El monto debe ser mayor que cero.');
                return this.mostrarMenu();
            }
            
            if (monto > 500) {
                console.log('\nError: El retiro máximo permitido es $500.00.');
                return this.mostrarMenu();
            }
            
            if (monto > this.saldo) {
                console.log('\nError: Fondos insuficientes.');
                return this.mostrarMenu();
            }
            
            this.saldo -= monto;
            this.registrarTransaccion(-monto);
            console.log(`\nRetiro exitoso. Su nuevo saldo es: $${this.saldo.toFixed(2)}`);
            this.mostrarMenu();
        });
    },
    registrarTransaccion(monto) {
        if (this.transacciones.length >= 5) this.transacciones.shift();
        this.transacciones.push(monto);
    },
    verTransacciones() {
        if (this.transacciones.length === 0) {
            console.log('\nNo hay transacciones registradas.');
        } else {
            console.log('\nÚltimas 5 transacciones:');
            this.transacciones.forEach((transaccion, index) => {
                const tipo = transaccion >= 0 ? 'Depósito' : 'Retiro';
                console.log(`${index + 1}. ${tipo}: $${Math.abs(transaccion).toFixed(2)}`);
            });
        }
        this.mostrarMenu();
    },
    mostrarMenu() {
        console.log('\n=== Menú Cajero ===');
        console.log('1. Consultar saldo');
        console.log('2. Depositar dinero');
        console.log('3. Retirar dinero');
        console.log('4. Ver últimas transacciones');
        console.log('5. Volver al menú principal');
        
        rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1': this.consultarSaldo(); break;
                case '2': this.depositarDinero(); break;
                case '3': this.retirarDinero(); break;
                case '4': this.verTransacciones(); break;
                case '5': mostrarMenuPrincipal(); break;
                default: 
                    console.log('\nOpción inválida. Intente nuevamente.');
                    this.mostrarMenu();
            }
        });
    }
};

// Sistema de Cola de Atención
const colaAtencion = {
    capacidad: 7,
    clientes: [],
    agregarCliente() {
        if (this.clientes.length >= this.capacidad) {
            console.log('\nLa cola está llena. No se pueden agregar más clientes.');
            return this.mostrarMenu();
        }
        
        rl.question('Ingrese el nombre del cliente: ', (nombre) => {
            if (!nombre.trim()) {
                console.log('\nError: Debe ingresar un nombre válido.');
                return this.mostrarMenu();
            }
            
            this.clientes.push(nombre.trim());
            console.log(`\nCliente "${nombre.trim()}" agregado a la cola.`);
            this.mostrarMenu();
        });
    },
    atenderCliente() {
        if (this.clientes.length === 0) {
            console.log('\nNo hay clientes en la cola.');
        } else {
            const cliente = this.clientes.shift();
            console.log(`\nCliente "${cliente}" ha sido atendido.`);
        }
        this.mostrarMenu();
    },
    verCola() {
        if (this.clientes.length === 0) {
            console.log('\nLa cola está vacía.');
        } else {
            console.log('\nClientes en cola:');
            this.clientes.forEach((cliente, index) => {
                console.log(`${index + 1}. ${cliente}`);
            });
        }
        this.mostrarMenu();
    },
    mostrarMenu() {
        console.log('\n=== Menú Cola de Atención ===');
        console.log('1. Agregar cliente a la cola');
        console.log('2. Atender siguiente cliente');
        console.log('3. Ver cola de clientes');
        console.log('4. Volver al menú principal');
        
        rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1': this.agregarCliente(); break;
                case '2': this.atenderCliente(); break;
                case '3': this.verCola(); break;
                case '4': mostrarMenuPrincipal(); break;
                default: 
                    console.log('\nOpción inválida. Intente nuevamente.');
                    this.mostrarMenu();
            }
        });
    }
};

// Sistema de Máquina Expendedora
const maquinaExpendedora = {
    productos: [
        { nombre: 'Dulce', cantidad: 5, precio: 1 },
        { nombre: 'Gaseosa', cantidad: 3, precio: 1 },
        { nombre: 'Chocolate', cantidad: 2, precio: 1 },
        { nombre: 'Galleta', cantidad: 4, precio: 1 },
        { nombre: 'Jugo', cantidad: 1, precio: 1 }
    ],
    mostrarInventario() {
        console.log('\nInventario disponible:');
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre} - ${producto.cantidad} unidades - $${producto.precio.toFixed(2)}`);
        });
        this.mostrarMenu();
    },
    comprarProducto() {
        rl.question('Ingrese el número del producto (1-5): ', (numero) => {
            const indice = parseInt(numero) - 1;
            
            if (isNaN(indice)) {
                console.log('\nError: Debe ingresar un número válido.');
                return this.mostrarMenu();
            }
            
            if (indice < 0 || indice >= this.productos.length) {
                console.log('\nError: Número de producto inválido.');
                return this.mostrarMenu();
            }
            
            const producto = this.productos[indice];
            
            if (producto.cantidad <= 0) {
                console.log(`\nLo sentimos, "${producto.nombre}" está agotado.`);
                this.sugerirProducto();
                return;
            }
            
            rl.question(`Inserte $${producto.precio.toFixed(2)} para comprar: `, (pago) => {
                if (parseFloat(pago) !== producto.precio) {
                    console.log(`\nError: Debe insertar exactamente $${producto.precio.toFixed(2)}.`);
                    return this.mostrarMenu();
                }
                
                producto.cantidad--;
                console.log(`\n¡Gracias por su compra! Ha recibido: ${producto.nombre}`);
                this.mostrarMenu();
            });
        });
    },
    sugerirProducto() {
        const disponibles = this.productos.filter(p => p.cantidad > 0);
        
        if (disponibles.length === 0) {
            console.log('Lo sentimos, no hay productos disponibles actualmente.');
        } else {
            const sugerencia = disponibles[Math.floor(Math.random() * disponibles.length)];
            console.log(`¿Le gustaría probar con ${sugerencia.nombre}? Tenemos ${sugerencia.cantidad} disponibles.`);
        }
        
        this.mostrarMenu();
    },
    mostrarMenu() {
        console.log('\n=== Menú Máquina Expendedora ===');
        console.log('1. Mostrar inventario');
        console.log('2. Comprar producto');
        console.log('3. Volver al menú principal');
        
        rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1': this.mostrarInventario(); break;
                case '2': this.comprarProducto(); break;
                case '3': mostrarMenuPrincipal(); break;
                default: 
                    console.log('\nOpción inválida. Intente nuevamente.');
                    this.mostrarMenu();
            }
        });
    }
};

// Sistema de Gestión de Habitaciones
const gestionHabitaciones = {
    habitaciones: Array(5).fill(0), // 0 = libre, 1 = ocupada
    mostrarEstado() {
        console.log('\nEstado de las habitaciones:');
        this.habitaciones.forEach((estado, index) => {
            console.log(`Habitación ${index + 1}: ${estado === 0 ? 'Disponible' : 'Ocupada'}`);
        });
        this.mostrarMenu();
    },
    reservarHabitacion() {
        rl.question('Ingrese el número de habitación a reservar (1-5): ', (numero) => {
            const indice = parseInt(numero) - 1;
            
            if (isNaN(indice) || indice < 0 || indice >= this.habitaciones.length) {
                console.log('\nError: Número de habitación inválido.');
                return this.mostrarMenu();
            }
            
            if (this.habitaciones[indice] === 1) {
                console.log('\nLa habitación ya está ocupada.');
            } else {
                this.habitaciones[indice] = 1;
                console.log('\nHabitación reservada con éxito.');
            }
            
            this.mostrarEstado();
        });
    },
    liberarHabitacion() {
        rl.question('Ingrese el número de habitación a liberar (1-5): ', (numero) => {
            const indice = parseInt(numero) - 1;
            
            if (isNaN(indice) || indice < 0 || indice >= this.habitaciones.length) {
                console.log('\nError: Número de habitación inválido.');
                return this.mostrarMenu();
            }
            
            if (this.habitaciones[indice] === 0) {
                console.log('\nLa habitación ya está disponible.');
            } else {
                this.habitaciones[indice] = 0;
                console.log('\nHabitación liberada con éxito.');
            }
            
            this.mostrarEstado();
        });
    },
    mostrarMenu() {
        console.log('\n=== Menú Gestión de Habitaciones ===');
        console.log('1. Mostrar estado de habitaciones');
        console.log('2. Reservar habitación');
        console.log('3. Liberar habitación');
        console.log('4. Volver al menú principal');
        
        rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1': this.mostrarEstado(); break;
                case '2': this.reservarHabitacion(); break;
                case '3': this.liberarHabitacion(); break;
                case '4': mostrarMenuPrincipal(); break;
                default: 
                    console.log('\nOpción inválida. Intente nuevamente.');
                    this.mostrarMenu();
            }
        });
    }
};

// Menú Principal
function mostrarMenuPrincipal() {
    console.log('\n=== MENÚ PRINCIPAL ===');
    console.log('1. Cajero Automático');
    console.log('2. Cola de Atención en Supermercado');
    console.log('3. Máquina Expendedora');
    console.log('4. Gestión de Habitaciones');
    console.log('5. Salir');
    
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': cajero.mostrarMenu(); break;
            case '2': colaAtencion.mostrarMenu(); break;
            case '3': maquinaExpendedora.mostrarMenu(); break;
            case '4': gestionHabitaciones.mostrarMenu(); break;
            case '5': 
                console.log('\n¡Gracias por usar nuestro sistema!');
                rl.close();
                break;
            default: 
                console.log('\nOpción inválida. Intente nuevamente.');
                mostrarMenuPrincipal();
        }
    });
}

// Inicio del programa
console.log('=== BIENVENIDO AL SISTEMA INTEGRADO ===');
mostrarMenuPrincipal();