class producto {
    constructor (id, marca, tipo, precio, imagen){
        this.id = id
        this.marca = marca
        this.tipo = tipo
        this.precio = precio
        this.imagen = imagen
    }
    verData(){
        console.log(`el suplemento es ${this.tipo}, de la marca ${this.marca} y su precio es ${this.precio}.`)
    }
}

let tienda = []
const cargarTienda = async() =>{
    const response = await fetch("productos.json")
    const data = await response.json()
    console.log(data)
    for (let producto of data){
        let productoNuevo = new Libro(producto.id, producto.marca, producto.tipo, producto.precio, producto.imagen)
        tienda.push(productoNuevo)
    }
    localStorage.setItem("estanteria", JSON.stringify(estanteria) )
    
}


let productosEnCarrito = JSON.parse(localStorage.getItem("productosEnCarrito")) || [] //CON OPERADOR OR
//STORAGE
//if(localStorage.getItem("tienda")){
//    tienda = JSON.parse(localStorage.getItem("tienda"))
//}
//else{
//    tienda.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9)
//    localStorage.setItem("tienda", JSON.stringify(tienda))
//}

//STORAGE TIENDA CON OPERADOR TERNARIO
localStorage.getItem("tienda") ? tienda = JSON.parse(localStorage.getItem("tienda")) : cargarTienda()
//tienda.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9) 
//localStorage.setItem("tienda", JSON.stringify(tienda))