//Verificar si un numero es primo
const rl = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout
 });
rl.question('Ingrese un numero: ', (n) => {
    const esPrimo = (n) => {
        if (n <= 2) return false;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;

    };
    console.log(esPrimo(Number(n)) ? 'Es primo' : 'No es primo');
    rl.close();

});