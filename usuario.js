class Usuario {
    constructor(nombre, email, rol = "Cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;

        this.activo = true;
    }

    saludo(){
        return `Hola ${this.nombre}! Su rol es ${this.rol}`
    }

    desactivar() {
        this.activo = false;
        return "Cambio confirmado!"
    }

    resumen() {
        return `El ${this.rol} ${this.nombre} con email \"${this.email}\" tiene la cuenta ${this.activo ? "activa" : "inactiva"}`
    }

    
}

let usuario1 = new Usuario("Jose", "jose@gmail.com")
let usuario2 = new Usuario("Felipe", "Felipe@gmail.com", "administrador")

console.log(usuario1.saludo() + "\n" + usuario1.resumen());
console.log(usuario2.saludo() + "\n" + usuario2.resumen());


class UsuarioVIP extends Usuario {
    constructor(nombre, email, membresia) {
        super(nombre, email, "cliente VIP");
        this.membresia = membresia;
    }

    saludo() {
        return `${super.saludo()} y cuenta con la membresía ${this.membresia}`
    }

    beneficios() {
        return `Con la membresia ${this.membresia} tiene la posibilidad de acumular puntos`
    }
}

// let usuarioVip = new UsuarioVIP("Pipe", "pipe@kd.com", "Platinium")

// console.log(usuarioVip.saludo());
// console.log(usuarioVip.beneficios());

export {Usuario, Usuario}
