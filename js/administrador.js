//como utilizar codigo de otro archivo JS en un archivo nuevo
import Pelicula from "./classPelicula.js";
//se agrega la llaves ya que no lleva el export default

import {sumarValidaciones} from "./helpers.js";

const btnEditar=document.getElementById('btnEditar');
const btnAgregar=document.getElementById('btnAgregar');
const formPelicula = document.getElementById('formAdministrarPelicula');

const codigo=document.getElementById('inputCodigo');
const txtTitulo=document.getElementById('inputTitulo');
const txtDescripcion=document.getElementById('inputDescripcion');
const txtImg=document.getElementById('inputImagen');
const txtGenero=document.getElementById('inputGenero');
const anio=document.getElementById('inputAnio');
const pais=document.getElementById('inputPais');
const duracion=document.getElementById('inputDuracion');
const reparto=document.getElementById('inputReparto');
const msjFormulario=document.getElementById('msjFormulario');
let listaPeliculas=[];

btnEditar.addEventListener('click',crearPeli)
btnAgregar.addEventListener('click',mostrarModalPelicula)
formPelicula.addEventListener('submit',cargarPelicula);




//instanciamos un objeto sobre el archivo de modal de botstrap
const modalPelicula = new bootstrap.Modal(document.getElementById('modalAgregar'))



function crearPeli(){

}
function mostrarModalPelicula(){
//modalPelicula nos sirve para crear un intancia de un modal desde JS
modalPelicula.show();

}
function cargarPelicula(e){
    //nos sirve para para poder usar un formulario
  
    e.preventDefault()
    
    //validar los datos
    console.log("anio: "+anio.value+'\n');


    let sumario=sumarValidaciones(txtTitulo.value , txtDescripcion.value ,txtImg.value,duracion.value,anio.value,pais.value,reparto.value,txtGenero.value);
    if(sumario.length ===0){
        let nuevaPeli = new Pelicula(txtTitulo.value,txtDescripcion.value,txtImg.value,txtGenero.value,anio.value,duracion.value,pais.value,reparto.value)
        listaPeliculas.push(nuevaPeli);
        localStorage.setItem('listaPeliculas',JSON.stringify(listaPeliculas));
        console.log(nuevaPeli);
        console.log("creando la pelicula");
        modalPelicula.hide();
    }
    else{
        msjFormulario.className='alert alert-danger mt-3 ';
        msjFormulario.innerHTML=sumario;
    }
    //Amacenar en localStorage

    //para ocultar la ventana modal
    
}