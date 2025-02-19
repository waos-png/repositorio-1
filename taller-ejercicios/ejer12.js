//Verificar si un automóvil está defectuoso

let modelo = 195;

if ([119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780].includes(modelo)) {
    console.log("Su automóvil está defectuoso, llevar a garantía.");
} else {
    console.log("Su automóvil no está defectuoso.");
}