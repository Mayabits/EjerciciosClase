/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada

function init(){
    
}
document.addEventListener("DOMContentLoaded",init);

2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/
function noMostrar(enlace1){
    enlace1.preventDefault();
    $("#firstp").toggleClass("ocultar");
}
function init(){
    console.log("DOM Cargado");
    $("#firstlink").click(noMostrar);
};
document.addEventListener("DOMContentLoaded",init);