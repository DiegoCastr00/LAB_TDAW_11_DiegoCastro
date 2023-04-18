const imagenes = document.querySelectorAll('.imagen');

for (let i = 0; i < imagenes.length; i++) {

    imagenes[i].addEventListener('mouseenter', function() {
        const src = this.src;
        const nuevaImagen = document.createElement('img');
        nuevaImagen.src = src;
        contenedorNuevaImagen = document.createElement('div');
        contenedorNuevaImagen.classList.add('contenedor-nueva-imagen');
        
        contenedorNuevaImagen.appendChild(nuevaImagen);
        this.appendChild(contenedorNuevaImagen)

        contenedorNuevaImagen.style.width ="20%"

        this.parentNode.insertBefore(contenedorNuevaImagen.firstChild, this.nextSibling);
        
        this.addEventListener('mouseleave', function() {
          const contenedor = document.querySelector('.contenedor-nueva-imagen');
          contenedor.remove();
        });
      });


    
}
