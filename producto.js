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

export {Producto, ProductoDigital}