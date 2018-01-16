/*
1. Crea un fichero dom.html e incluye Jquery
2. Incluye un párrafo en el html, y luego modifica el contenido del párrafo desde Jquery.
3. Inserta otro párrafo al final del body con Jquery
4. Inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
5. Modifica el color de fondo del último párrafo del HTML con Jquery
6. Añade un id al último párrafo desde Jquery
7. Quita el id al último párrafo desde Jquery
8. Asigna la clase rojo al último párrafo
9. Imprime por consola las clases que tiene asignadas el último párrafo
10. Coloca un formulario de login en el HTML
11. Asigna un id al campo nombre
12. imprime por consola el valor del campo nombre
*/
function init(){
    console.log("DOM Cargado Jquery");
    $("#main").html("La metamorfosis es la transformación que experimentan determinados animales en su desarrollo biológico y que afecta no solo a su forma sino también a sus funciones y su modo de vida; es típica de los poliquetos, equinodermos, insectos, crustáceos y anfibios.");
   //también podría poner "p" porque solo hay un párrafo o "p#main".
    $("body").append("<p>Cuando nacen las mariposas, tienen una forma muy diferente de la que será su forma adulta. Lo mismo ocurre con otros insectos que tienen un proceso de metamorfosis para llegar a su edad adulta.</p>");
    
    $("#main").after("<p>Cabe aclarar que dichas transformaciones no son sólo propias de los pequeños insectos como la mariposa. Por ejemplo las ranas y sapos, también tienen en su proceso de desarrollo biológico y anatómico, es decir una metamorfosis.</p>");
//$("p:last").before
    $("p").eq(2).css("background-color","lightgreen");
    console.log($("p"));
    $("p:last").attr("id","last_p");  
    $("p:last").remove("id","last_p");
    $("p:last").addClass("rojo");
    console.log($("p:last").attr("class"));
 /*$("p:last").attr("class","rojo");
    var muestra=$("p:last").attr("class");
    console.log(muestra);
    $("input:first").attr("id","username");
    var imprime=$("input:first").attr("value");
    console.log(imprime);
*/
    $("#username").attr("id","username");
    console.log($("#username"));
}
$("document").ready(init);


