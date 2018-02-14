/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada

function init(){
    
}
document.addEventListener("DOMContentLoaded",init);

2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado

otra opción es hacer un bucle al document y selecciona todas las etiquetas <a>:
 for (var item of document.querySelectorAll("a")){
        item.addEventListener("click",ocultaGenerica);
    }
*/
function noMostrar(enlace1){
    enlace1.preventDefault();
     console.log(this)
    
enlace1.target.parentNode.children[0].classList.toggle("ocultar");
console.log(this.innerHTML);
    if(this.innerHTML=="Ocultar contenidos"){
        this.innerHTML="Mostrar Contenidos";
    }else{
        this.innerHTML="Ocultar contenidos";
    }
  
}

function init(){
    console.log("DOM Cargado");
    document.getElementById("firstlink").addEventListener("click",noMostrar);
    //le digo al documento. que coja por ID ("firstlink") . y añada el evento (que cada vez que hagan"click" en ese ID, ejecute la función, noMostrar)
    document.getElementById("link2").addEventListener("click",noMostrar);
    document.getElementById("link3").addEventListener("click",noMostrar)
};
document.addEventListener("DOMContentLoaded",init);