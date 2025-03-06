//calcular potencia
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingrese la base: ', (base) => {
    rl.question('Ingrese el exponente: ', (exp) => {
        const potencia = (base, exp) => exp === 0 ? 1 : base * potencia(base, exp - 1);
        console.log(potencia(Number(base), Number(exp)));
        rl.close();
    });
});