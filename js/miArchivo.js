let contenedorDeAlimentos = document.getElementById("contenedorDeAlimentos");

fetch('/data.json')

.then((res) => res.json())

.then((data) => {

    data.forEach((producto) =>{
        const contenedor = document.createElement ('div')
        contenedor.innerHTML = `
        <div class="col">
        <div class="card h-50">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show that equal height
                    action.</p>
                    <div class="d-grid gap-2">
                    <button id="btn" class ="btn btn-primary" type="button">comprar</button>
                    </div>
                </div>
            </div>
         </div>
        
        `
        contenedorDeAlimentos.append(contenedor);

    })

})


const botonDeCompras = document.querySelectorAll(".btn")

botonDeCompras.forEach((boton)=>{

boton.addEventListener("click", agregarPedido)

});

function agregarPedido(){

  console.log(agregado)

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Agregado',
    showConfirmButton: false,
    timer: 1000

  })
}
const arrayCadena = JSON.stringify(producto.nombre);

localStorage.setItem('misProductos', arrayCadena); 

const ProductosLs = localStorage.getItem('misProductos');

const arrayObjetos = JSON.parse(ProductosLs);


/*como sumar los productos, recorre el array 
y hace una suma retornando el resultado*/

// const totalProductos = productos.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
// console.log(totalProductos);

// /** For of para mosrar los productos  */

// let lista = document.createElement("ul")
// let contenido = document.getElementsByClassName(".contenido")

// for(producto of productos){

//     lista.innerHTML += `<li class= "lista-item">${producto}</li> `
//     contenido.append(lista);
// }




// const nombre = "Diego";

//  localStorage.setItem('nombreUsuario', nombre )


// let boton = document.getElementById("modoNegro");

// boton.addEventListener("click", cambiarColor)

// function cambiarColor(){
    
//     modoNegro.innerHTML = "hola"
    
//     console.log("color cambiado")
    
// };
// const cambioNombre = document.getElementById ("cambioNombre")
// const compraSegura = document.getElementById ("botonCompra")

// compraSegura.addEventListener ("click", elementoComprado )

// function elementoComprado(){

//     alert('elemento comprado')

//     localStorage.setItem("compra", productos)

//     const productosJason = JSON.stringify(productos)

//     localStorage.setItem("compra", productosJason)

//    usuarioEnLS = localStorage.getItem("compra");

//    usuarioObjeto = JSON.parse(usuarioEnLS)

//      console.log(usuarioObjeto)

//      cambioNombre.innerHTML = usuarioEnLS;
//  }

// function perrito(nombre){

//     return ("Hola " + nombre)
// }
// console.log(perrito("Lunita"))

// function persona (nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//     this.cumpleanio = this.edad + 1
// }
// persona1 = new persona ("Diego", "Cano", 42);
// console.log(persona1);
// console.log(persona1
//     )
// localStorage.setItem("persona", persona1)
// const perrito = function(){}


// const perrito = ()=>{}


/*elegir el producto */

// let productoElegido = prompt("Elija su producto ")
// console.log(productos.find((producto)=>producto.nombre === productoElegido));


