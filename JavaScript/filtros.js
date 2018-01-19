/*
1. Crea un fichero filtros.html e incluye Jquery -ya
2. Incluye 3 listados desordenado de 10 elementos de texto cada uno -ya
3. Haz que el tercer elemento del primer listado tenga el fondo amarillo-ya
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento -ya
5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento -regular
6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento
*/
function init (){
    console.log("Dom cargado");
    $("ul li").eq(2).css("background-color","yellow");
    /*corrección de David: 
    $("ul:first li:nth-child(3)").css("background-color","yellow");
    */
    $("ul li").slice(3,4).css("background-color","yellow");
    // $("ul:first li").eq(2).next()css("background-color","yellow");
    //MI RESPUESTA:$("ul").add("id","primer");
    $("ul:first li").eq(2).parent().attr("id","primero");
    //Esto no es así: $("#segun").css("background-color","red");
    $("body ul:nth-child(2) li:first").parent().children().css("background-color","red");
    //nth-child empieza en 1, eq empieza en 0
}
$("document").ready(init);
