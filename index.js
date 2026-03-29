import { Usuario, UsuarioVIP } from "./usuario.js";
import { Producto, ProductoDigital } from "./producto.js";

let daniel = new UsuarioVIP('daniel', 'daniel@email.com', 'gold')
let felipe = new Usuario('felipe', 'felipe@email.com')
let nicolas = new Usuario('nicolas', 'nicolas@email.com');

let tv = new ProductoDigital('televisor', 1200, 'electrodomesticos', 'mensual')
let celular = new ProductoDigital('celular', 2400, 'digital','anual')
let pilas = new Producto('pilas', 50, 'electrodomesticos')
let radio = new Producto('sofa', 2004, 'muebles')

felipe.desactivar();

console.log(felipe.resumen(UsuarioVIP));

// Cuarto punto

let descuento = celular.aplicarDescuento(20);
console.log(descuento);

// tarjeta
console.log(tv.tarjeta());
console.log(celular.tarjeta());
console.log(pilas.tarjeta());
console.log(radio.tarjeta());

console.log(daniel.resumen());
console.log(felipe.resumen());
console.log(nicolas.resumen());

