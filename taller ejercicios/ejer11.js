//Diagnóstico de estado de la computadora

let pitido = true;
let discoGira = false;

if (pitido && discoGira) {
    console.log("Póngase en contacto con el técnico de apoyo.");
} else if (pitido && !discoGira) {
    console.log("Verificar contactos de la unidad.");
} else if (!pitido && !discoGira) {
    console.log("Traiga la computadora para repararla en la central.");
} else {
    console.log("Compruebe las conexiones de altavoces.");
}