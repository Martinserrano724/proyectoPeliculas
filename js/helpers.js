function cantidadCaracteres(texto,min,max){
    console.log("validando Caracteres");
    if(texto.length >= min && texto.length <=max ){
        console.log("cantidad caracteres correcto");
        return true;
    }
    else{
        console.log("cantidad caracteres incorrecto");
        return false;
    }
}
function validandoDuracion(value){
    console.log("validando Duracion");
    let patron= /^[0-9]{1,3}$/;
    if(patron.test(value)){
        console.log("digito valido de 1 a 3 caracteres");
        return true;
    }
    else{
        console.log("cantidad de digitos incorrecto");
        return false;
    }
}
function validandoAnio(value){
    console.log("validando Año");
    const anioActual = new Date().getFullYear()+1;

    if(value >= 1985 && value <= anioActual){
        console.log("año valido ");
        return true;
    }
    else{
        console.log("año incorrecto");
        return false;
    }
   
}
function validandoImgUrl(value){
    console.log("validando Imagen");
    let patron= /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|WebP)$/;
    if(patron.test(value)){
        console.log("imagen valida");
        return true;
    }
    else{
        console.log("imagen invalida debe ser tipo png o gif o jpg");
        return false;
    }
}
function validandoGenero(genero){
    console.log("validando Genero");
       if(genero.length>0 && (genero==='Aventura'||genero==='Accion'||genero==='Drama'||genero==='Terror')){
        console.log("genero valida");
        return true;
    }
    else{
        console.log("genero invalido");
        return false;
    }
}
export function sumarValidaciones(titulo,descripcion,img,duracion,anio,pais,reparto,genero){
    let resume='';
    if(!cantidadCaracteres(titulo,3,100)){
        resume +='Corregir el campo del titulo que debe contener entre 3 y 100 carateres <br>'
    }
    if(!cantidadCaracteres(descripcion,10,200)){
        resume +='Corregir el campo de descripcion <br>'
    }
    if(!validandoImgUrl(img)){
        resume +='imagen invalida debe ser tipo png o gif o jpg <br>'
    }
    if(!validandoGenero(genero)){
        resume +='Corregir el campo de genero. Selecione una opcion <br>'
    }
    
        if(!validandoAnio(anio)&& anio!=0){
            resume +=`Corregir el campo de año debe ser desde 1985 a ${new Date().getFullYear()+1} <br>`
        }
    
    if(pais.length!=0){
        if(!cantidadCaracteres(pais,3,100)){
            resume +='Corregir el campo de pais <br>'
        }
    }
   if(duracion!=''){
    if(!validandoDuracion(duracion)){
        resume +='Corregir el campo de duracion debe tener de 1 a 3 digitos <br>'
    }
   }
    if(reparto.length!=0){
        if(!cantidadCaracteres(reparto,3,200)){
            resume +='Corregir el campo de reparto <br>'
        }
    }
    
    
    if(resume.length !==0){
        return resume;
    }
    else{
        console.log("todo ok con el formulario");
        return '';
    }
}