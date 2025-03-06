// suma de digitos de un número
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese un numero: ', (n) => {
    const sumaDigitos = (n) => n < 10 ? n : n % 10 + sumaDigitos(Math.floor(n / 10));
    console.log(sumaDigitos(Number(n)));
    rl.close();
});