import Pelicula from "./classPelicula.js";

let listaPeliculas = JSON.parse(localStorage.getItem("listaPeliculas")) || [];

//transformamos el codigo  de tipo objeto
//desde la linea 30 ala 42 transformamos el objeto que esta almacenado en el localStorage a tipo pelicula ya que al guardarse pierde las propiedas de la clase Pelicula
console.log(listaPeliculas);


if (listaPeliculas) {
  // si el local storage esta vacio devolvemos un array vacio.

  listaPeliculas = listaPeliculas.map((peli) => {
    return new Pelicula(
      peli.titulo,
      peli.descripcion,
      peli.imagen,
      peli.genero,
      peli.anio,
      peli.duracion,
      peli.pais,
      peli.reparto
    );
  });
}
cargaInicial();

function cargaInicial() {
  // si no hay datos cargados no mostrara nada en la tabla
  if (listaPeliculas.length > 0) {
    //dibujes los datos en la tabla

    listaPeliculas.map((peli) => dibujarFilas(peli));
  }
}
function dibujarFilas(peli) {
  let datosCard = document.getElementById("cardIndex");
  //aqui se dubuja la tabla

  datosCard.innerHTML += ` 
 
  <article class="col-md-4 col-lg-3 mb-3">
            <div class="card h-100">
                <img src="${peli.imagen}" class="card-img-top" alt="${peli.titulo}">
                <div class="card-body">
                  <h5 class="card-title">${peli.titulo}</h5>
                </div>
                <div class="card-footer text-center">
                    <a href="pages/detalle.html" class="btn btn-primary">Detalle</a>
                </div>
              </div>
        </article>`
}
