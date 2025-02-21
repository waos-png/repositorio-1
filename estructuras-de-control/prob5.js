let encendido = true;
let velocidadVentilador = 3;

if (encendido) {
    console.log('El ventilador está encendido');

    if (velocidadVentilador == 0) {
        console.log('El ventilador está apagado (velocidad 0)');
    } else if (velocidadVentilador > 0 && velocidadVentilador <= 3) {
        console.log(`El ventilador está funcionando a velocidad ${velocidadVentilador}`);
    } else {
        console.log('¡Advertencia! Velocidad no válida.');
    }
} else {
    console.log('Encienda el ventilador para usarlo.');
}