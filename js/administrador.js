//como utilizar codigo de otro archivo JS en un archivo nuevo
import Pelicula from "./classPelicula.js";
//se agrega la llaves ya que no lleva el export default

//inpotyo el sumar validacion funcion del archivo helpers.js
import { sumarValidaciones } from "./helpers.js";

const btnEditar = document.getElementById("btnEditar");
const btnAgregar = document.getElementById("btnAgregar");
const formPelicula = document.getElementById("formAdministrarPelicula");

const codigo = document.getElementById("inputCodigo");
const txtTitulo = document.getElementById("inputTitulo");
const txtDescripcion = document.getElementById("inputDescripcion");
const txtImg = document.getElementById("inputImagen");
const txtGenero = document.getElementById("inputGenero");
const anio = document.getElementById("inputAnio");
const pais = document.getElementById("inputPais");
const duracion = document.getElementById("inputDuracion");
const reparto = document.getElementById("inputReparto");
const msjFormulario = document.getElementById("msjFormulario");
//trabajar las peliculas para que vuelvan a ser un objeto Pelicula.
let listaPeliculas = JSON.parse(localStorage.getItem('listaPeliculas'))|| [];

//manejador de eventos
//btnEditar.addEventListener("click", crearPeli);
btnAgregar.addEventListener("click", mostrarModalPelicula);
formPelicula.addEventListener("submit", cargarPelicula);

//desde la linea 30 ala 42 transformamos el objeto que esta almacenado en el localStorage a tipo pelicula ya que al guardarse pierde las propiedas de la clase Pelicula
for (let index = 0; index < listaPeliculas.length; index++) {
  
}
if (listaPeliculas) {
  // si el local storage esta vacio devolvemos un array vacio.
  
  listaPeliculas = listaPeliculas.map((peli)=>  { return (
    new Pelicula(peli.titulo,peli.descripcion,peli.imagen,peli.genero,peli.anio,peli.duracion,peli.pais,peli.reparto)
    )
  }
  );
}

console.log(listaPeliculas);
cargaInicial();

//instanciamos un objeto sobre el archivo de modal de botstrap
const modalPelicula = new bootstrap.Modal(
  document.getElementById("modalAgregar")
);

//carga de datos en la pagina de administrador
function cargaInicial(){
  // si no hay datos cargados no mostrara nada en la tabla
  if(listaPeliculas.length>0){
    //dibujes los datos en la tabla 
    
    listaPeliculas.map((peli,contador)=> dibujarFilas(peli,contador))

  }
}

function dibujarFilas(peli,contador){
  let datosTabla = document.getElementById('tBodyTabla');
  //aqui se dubuja la tabla
 datosTabla.innerHTML+=` 
 <tr>
 <th>${contador+1}</th>
 <td>${peli.titulo}</td>
 <td class="text-truncate"> ${peli.descripcion} </td>
 <td class="text-truncate"> ${peli.imagen}</td>
 <td> ${peli.genero}</td><td>
   <button class="bi bi-pencil-square btn btn-warning "  id="btnEditar"></button>
   <button class="bi bi-x-square btn btn-danger "></button>
 </td>
</tr>`
}
//-------------------------------------------------------------------
const inputContador = document.getElementById('inputDescripcion');
const contadorDescripcion = document.getElementById('contadorCaracteres');

inputContador.addEventListener('input', cargaCaracteresTextArea);

function cargaCaracteresTextArea() {
  let resta=400-inputContador.value.length
  if(resta >= 0)
  contadorDescripcion.innerHTML =resta;
  
}
/*txtDescripcion.className=`onkeyup="mostrarTextDescripcion()"`

function mostrarTextDescripcion(){
  console.log()
}*/
//-------------------------------------------------------------------




function mostrarModalPelicula() {
  //modalPelicula nos sirve para crear un intancia de un modal desde JS
  modalPelicula.show();
  msjFormulario.className = "alert alert-danger mt-3 d-none";
}
function cargarPelicula(e) {
  //nos sirve para para poder usar un formulario

  e.preventDefault();

  //validar los datos
  let sumario = sumarValidaciones(
    txtTitulo.value,
    txtDescripcion.value,
    txtImg.value,
    duracion.value,
    anio.value,
    pais.value,
    reparto.value,
    txtGenero.value
  );
  if (sumario.length === 0) {
    let nuevaPeli = new Pelicula(
      txtTitulo.value,
      txtDescripcion.value,
      txtImg.value,
      txtGenero.value,
      anio.value,
      duracion.value,
      pais.value,
      reparto.value
    );
    listaPeliculas.push(nuevaPeli);
    //guardar datos
    guardarLocalStorage();
    //limpiar datos
    limpiarForm();
    //cerrar formulario
    modalPelicula.hide();
    //cargamos la ultima fila en la tabla
    let contadorPeliculas = listaPeliculas.length-1;
    dibujarFilas(nuevaPeli,contadorPeliculas);

    Swal.fire(
      'Pelicula Creada',
      `la Pelicula ${nuevaPeli.titulo} fue creada correctamente`,
      'success'
    )
  
  } else {
    msjFormulario.className = "alert alert-danger mt-3 ";
    msjFormulario.innerHTML = sumario;
 
  }
}
function guardarLocalStorage() {
  localStorage.setItem("listaPeliculas", JSON.stringify(listaPeliculas));
}
function limpiarForm() {
  formPelicula.reset();
}
