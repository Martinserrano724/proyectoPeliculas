document.getElementById("themaDark").addEventListener("click",()=>canbiarTema('dark'));
document.getElementById("themaLigth").addEventListener("click",()=>canbiarTema('ligth'));
function canbiarTema(color){
    let body =document.querySelector('body');
    body.setAttribute('data-bs-theme',color);
    // body.setAttribute('data-bs-theme',color) nos permite aceder a los atribustos de botstrap
    (color == 'dark')? document.getElementById('imgNavbar').className="bi bi-moon-stars-fill":document.getElementById('imgNavbar').className="bi bi-brightness-high-fill"
}
