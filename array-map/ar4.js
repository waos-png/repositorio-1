//Máquina Expendedora de Dulces y Gaseosas 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = ['Dulce', 'Gaseosa', 'Chocolate', 'Galleta', 'Jugo'];
const cantidades = [5, 3, 2, 4, 1]; // Stock inicial de cada producto
const precio = 1; // Precio fijo de cada producto

function mostrarMenu() {
    console.log('\n----------------');
    console.log('1. Mostrar inventario');
    console.log('2. Comprar producto');
    console.log('3. Salir');
    console.log('----------------\n');

    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1': mostrarInventario(); break;
            case '2': comprarProducto(); break;
            case '3': rl.close(); break;
            default: console.log('Opción inválida.'); mostrarMenu();
        }
    });
}

function mostrarInventario() {
    console.log('\nInventario de productos:');
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}: ${cantidades[index]} unidades`);
    });
    mostrarMenu();
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
                    mostrarMenu();
                });
            } else {
                console.log(`\nProducto "${productos[codigo]}" agotado.`);
                sugerirProducto();
            }
        } else {
            console.log('\nCódigo de producto inválido.');
            mostrarMenu();
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
    mostrarMenu();
}

console.log('Bienvenido a la Máquina Expendedora');
mostrarMenu();