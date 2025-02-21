let usuarioBiblioteca = "carlos_libros";
let contraseñaBiblioteca = "lectura2023";

let usuarioIngresado = "carlos_libros";
let contraseñaIngresada = "lectura2023";

let nombreUsuario = "Carlos";

if (usuarioBiblioteca === usuarioIngresado && contraseñaBiblioteca === contraseñaIngresada) {
    console.log(`${nombreUsuario}, ¡bienvenido a la biblioteca virtual! Explora nuestro catálogo.`);
} else {
    console.log("Acceso denegado. Usuario o contraseña incorrectos.");
}