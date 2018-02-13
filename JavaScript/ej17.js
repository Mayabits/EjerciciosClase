/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada

function init(){
    
}
document.addEventListener("DOMContentLoaded",init);

2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado

 noMostrar(enlace1){
        $("#firstlink").html
        console.log(noMostrar);
    }
    w3school:
    $("a").click(function(event){
    event.preventDefault();
});

Mi respuesta:
ar enlace1;
function nomostrar(enlace1){
    $ ("#firstlink").click(nomostrar);
    enlace1.preventDefault();
}
function init(){
   console.log("DOM Cargado");   
   $ (nomostrar);
   console.log(nomostrar);
};
document.addEventListener("DOMContentLoaded",init);
-PERO NO- Se hace con CSS, PONIENDO UN STYLE EN EL HTML Y CON EL EVENTO .toggleClass
    Supuestamente es esto:
       $("#thirdp").toggleClass("ocultar");
    
     $("#link2").click();
    $("#link3").click(nomostrar);
    $("#link3").click();
*/
function nomostrar(enlace1){
     enlace1.preventDefault();
     $("#firstp").toggleClass("ocultar");
    //.toggleClass añade u oculta una clase en el id que he puesto
    if ($("#firstp").hasClass("ocultar")){
     $("#firstlink").html("Mostrar contenidos")}
        //si existe la clase ocultar dentro de #firstp {modifica el html de "link1" por ("ese texto")}
    else {$("#firstlink").html("Ocultar contenidos")};
};
function hide2(enlace2){
    enlace2.preventDefault();
    $("#secondp").toggleClass("ocultar");
     if ($("#secondp").hasClass("ocultar")){
     $("#link2").html("Mostrar contenidos")}
        //si existe la clase ocultar dentro de #firstp {modifica el html de "link1" por ("ese texto")}
    else {$("#link2").html("Ocultar contenidos")};
};
function hide3(enlace3){
    enlace3.preventDefault();
    $("#thirdp").toggleClass("ocultar");
     if ($("#thirdp").hasClass("ocultar")){
     $("#link3").html("Mostrar contenidos")}
        //si existe la clase ocultar dentro de #firstp {modifica el html de "link1" por ("ese texto")}
    else {$("#link3").html("Ocultar contenidos")};
};
function init(){
   console.log("DOM Cargado");   
   $("#firstlink").click(nomostrar);
    $("#firstlink").click();
     $("#link2").click(hide2);
    $("#link2").click();
     $("#link3").click(hide3);
    $("#link3").click();
    };
document.addEventListener("DOMContentLoaded",init);