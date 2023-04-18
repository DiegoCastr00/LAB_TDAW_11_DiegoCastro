# LAB_TDAW_11_DiegoCastro
PRÁCTICA 11: Prevalidación
const imagenes = document.querySelectorAll('.imagen');

for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].addEventListener('mouseenter', function() {
        const src = this.src;
        const nuevaImagen = document.createElement('img');
        nuevaImagen.className = 'nuevaImagen';
        nuevaImagen.src = src;
        const contenedorNuevaImagen = document.createElement('div');
        contenedorNuevaImagen.classList.add('contenedor-nueva-imagen');
        contenedorNuevaImagen.appendChild(nuevaImagen);
        document.body.appendChild(contenedorNuevaImagen);
        
        console.log(nuevaImagen.src);

        nuevaImagen.style.width = "10%"
        nuevaImagen.style.height = "10%"
        nuevaImagen.style.padding = "0"
        nuevaImagen.style.margin = "0"
        
        this.addEventListener('mouseenter', function(event) {
            contenedorNuevaImagen.style.top = `${event.clientY}px`;
            contenedorNuevaImagen.style.left = `${event.clientX}px`;
          });

        this.addEventListener('mouseleave', function() {
            const contenedor = document.querySelector('.contenedor-nueva-imagen');
            contenedor.remove();
        });
    });


    
}
