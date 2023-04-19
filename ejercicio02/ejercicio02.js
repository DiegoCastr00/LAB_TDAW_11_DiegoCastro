const imagenes = document.querySelectorAll('.imagen');
const sectionnn = document.querySelectorAll('.nueva_img');

var filtro = document.getElementById("filtro");
var tabla = document.getElementById("tabla");
// Agregar un evento change al elemento select
filtro.addEventListener("change", function() {
  // Obtener el valor seleccionado del elemento select
  var valorFiltro = filtro.value;
  console.log(valorFiltro)
  // Recorrer todas las filas de la tabla
  for (var i = 0; i < tabla.rows.length; i++) {
    var fila = tabla.rows[i];
    console.log(fila)
      var valorCelda = fila.cells[5].innerHTML;
    console.log(valorCelda)

    // Ocultar o mostrar la fila dependiendo del valor seleccionado
      if (valorFiltro == "Género" || valorFiltro === valorCelda ) {
        
      console.log(valorCelda)

      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  }
});










function copiasrc(imagenes,nuevaImagen){
  const src = imagenes.src;
  nuevaImagen.src = src;
}

for (let i = 0; i < imagenes.length; i++) {
imagenes[i].addEventListener('mouseover', function() {
  const nuevaImagen = document.createElement('img');
  const sectionimg = document.createElement('section');
  nuevaImagen.className = 'nuevaImagen';
  sectionimg.className = 'secimg';
  copiasrc(this,nuevaImagen)

  sectionimg.appendChild(nuevaImagen)
  this.parentElement.appendChild(sectionimg)


  this.addEventListener('mouseleave', function() {
    sectionimg.remove();
  });
});
}