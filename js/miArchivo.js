let contenedorDeAlimentos = document.getElementById("contenedorDeAlimentos");


// let producto =[]

fetch('./data.json')

.then((res) => res.json())

.then((data) => {
    
    data.forEach((producto) =>{

        // data.json = producto
        
        const contenedor = document.createElement ('div')

        contenedor.innerHTML = `

        <div class="col">
        <div class="card h-50">
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <h6>${producto.precio}$</h6>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to show that equal height
                    action.</p>
                    <div class="d-grid gap-2">
                    <button id="btn" class ="btn btn-primary" type="button">comprar</button>
                    </div>
                </div>
            </div>
         </div>
        
        `;

        contenedorDeAlimentos.append(contenedor);

        const botonCompra = contenedor.querySelector('.btn');
      
        botonCompra.addEventListener(

            'click', ()=>{

                agregarPedido(producto.nombre);
                
            });

        const productosLs = localStorage.getItem('misProductos');

        let productos = [];

        if (productosLs){

            productos = JSON.parse(productosLs);

        }
        productos.push(producto);

        localStorage.setItem('misProductos',JSON.stringify(productos));
        
    });
       
    
    
    function agregarPedido(nombreProducto){
    
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Agregado',
          showConfirmButton: false,
          timer: 1000
          })


      console.log("producto agregado: ", nombreProducto);
      
    }
      
    })
    
    

     /**********Baños*********/

   const perroChico = 2000;

   const perroMediano =3000;
   
   const perroGrande = 4000;

  
   
   function cargarDatos(){
       
    const trabajoBaño = [];      

    const BañoProducto = document.getElementById ("baño-producto");

    let formSelect = document.getElementById ("formSelect");

    let tamanio = formSelect.value;
    
     trabajoBaño.push (tamanio);
   

    tamanio == "Perro grande" &&  Swal.fire( 'Gracias por elegirnos!', "El precio es " +"$ "+ perroGrande,'success');
    tamanio == "Perro mediano" &&  Swal.fire( 'Gracias por elegirnos!', "El precio es " +"$ "+ perroMediano,'success');
    tamanio == "Perro chico" &&  Swal.fire( 'Gracias por elegirnos!', "El precio es " +"$ "+ perroChico,'success');


    
    for (let dato of trabajoBaño) {

       let datoParrafo = document.createElement ('h4');

        datoParrafo.innerHTML = dato;

        BañoProducto.appendChild(datoParrafo);
    
    }
         BañoProducto.style.backgroundColor="yellow";

 }






 




