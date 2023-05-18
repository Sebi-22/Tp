class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

class LocalIndumentaria {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log("Producto agregado: " + producto.nombre);
    }

    mostrarProductos() {
        console.log("Lista de productos:");
        this.productos.forEach(producto => {
            console.log(producto.nombre + " - " + producto.precio);
        });
    }
}

const local = new LocalIndumentaria();

// Agregar productos
const producto1 = new Producto("Camisa blanca", "Camisa de manga larga", 1500.0);
const producto2 = new Producto("Pantalón negro", "Pantalón de tela", 2000.0);
const producto3 = new Producto("Vestido rojo", "Vestido elegante", 2500.0);

local.agregarProducto(producto1);
local.agregarProducto(producto2);
local.agregarProducto(producto3);

// Mostrar lista de productos
local.mostrarProductos();