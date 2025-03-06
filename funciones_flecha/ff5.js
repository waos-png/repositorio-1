//invertir cadena 
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese una cadena: ', (cadena) => {
    const invertir = (cadena) => cadena === '' ? '' : invertir(cadena.substr(1)) + cadena.charAt(0);
    console.log(invertir(cadena));
    rl.close();
});