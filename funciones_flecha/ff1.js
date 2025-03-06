// Factorial de un número
const rl = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout
 });

rl.question('Ingrese un numero: ', (n) => {
    const fact = (n) => n <= 1 ? 1 : n * fact(n - 1);
    console.log(fact(Number(n)));
    rl.close();
});