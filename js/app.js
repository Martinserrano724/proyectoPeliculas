
//localStorage.getItem nos devuelve el valor del local storage
let temaGuardado = localStorage.getItem('tema') || 'dark'
//para traer un valor que no sea string y este en formato JSon
//let temaGuardado = JSON.parse(localStorage.getItem('tema')) nos sirve para traer objetos,arrays, numeros
canbiarTema(temaGuardado);

document.getElementById("themaDark").addEventListener("click",()=>canbiarTema('dark'));
document.getElementById("themaLigth").addEventListener("click",()=>canbiarTema('ligth'));
function canbiarTema(color){
    let body =document.querySelector('body');
    body.setAttribute('data-bs-theme',color);
    // body.setAttribute('data-bs-theme',color) nos permite aceder a los atribustos de botstrap
    (color == 'dark')? document.getElementById('imgNavbar').className="bi bi-moon-stars-fill":document.getElementById('imgNavbar').className="bi bi-brightness-high-fill"

    //guardar datos en localStorage solo guardar datos tipo String
    //oh formato JSON para transformar en un dato que no es string JSON.stringify
    //para guardar datos en localStorage se usa setItem
    localStorage.setItem('tema',color);
   //
   localStorage.setItem('tema0',JSON.stringify(color));//transforma cualquier valor en string y permite guardarlos en el local storage

}
