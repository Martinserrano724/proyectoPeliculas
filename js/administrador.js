//como utilizar codigo de otro archivo JS en un archivo nuevo
import Pelicula from "./classPelicula.js";

const btnEditar=document.getElementById('btnEditar');
const btnAgregar=document.getElementById('btnAgregar');
btnEditar.addEventListener('click',crearPeli)
btnAgregar.addEventListener('click',mostrarModalPelicula)
const formPelicula = document.getElementById('formAdministrarPelicula');
formPelicula.addEventListener('submit',cargarPelicula);

let nuevaPeli = new Pelicula('super mario','algo','url','aventura',2023,'2hr','EEUU','-')
console.log(nuevaPeli);
//instanciamos un objeto sobre el archivo de modal de botstrap
const modalPelicula = new bootstrap.Modal(document.getElementById('modalAgregar'))



function crearPeli(){

}
function mostrarModalPelicula(){
//modalPelicula nos sirve para crear un intancia de un modal desde JS
modalPelicula.show();
}
function cargarPelicula(){
    //nos sirve para para poder usar un formulario
    e.preventDefault()
    
    //para ocultar la ventana modal
    modalPelicula.hide();
}