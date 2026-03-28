class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal() {
        return (Number(this.precio) + Number(this.precio) * 0.19)
    }

    aplicarDescuento(porcentaje) {
        return this.precio - (this.precio * (porcentaje / 100));
    }

    resumen() {
        return `El producto ${this.nombre} - ${this.categoria} tiene un precio base de: ${this.precio}`
    }

    tarjeta() {
        return `El producto ${this.nombre} - ${this.categoria} tiene un precio total de: ${this.calcularTotal()}`
    }
}

// 1. Crear dos productos de categorías distintas
const producto1 = new Producto("Smartphone X", 1000, "Electrónica");
const producto2 = new Producto("Silla Ergonómica", 200, "Muebles");

// 2. Llamar tarjeta() y verificar calcularTotal() con IVA (19%)
console.log(producto1.tarjeta()); // "precio total de: 1190"
console.log(producto2.tarjeta()); // "precio total de: 238"

// 3. Aplicar un descuento (ej. 20%)
const precioConDescuento = producto1.aplicarDescuento(20);
console.log(`Precio con 20% de descuento: ${precioConDescuento}`); // 800

// 4. Confirmar que el precio original no cambió
console.log(`¿El precio original sigue siendo 1000?: ${producto1.precio === 1000}`); // true
console.log(producto1.resumen());


class ProductoDigital extends Producto{
    constructor(nombre, precio, categoria, licencia) {
        super(nombre, precio, categoria)
        this.licencia = licencia;
    }

    calcularTotal() {
        return this.precio
    }

    tarjeta() {
        return `${super.tarjeta()}. Tiene una licencia ${this.licencia}`
    }
}

let productoDigital = 