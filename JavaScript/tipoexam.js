/*
1.- crea un html y asocia un fochero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe parecer exclusivamente el dato "agentfirstname" en cada elementos visual
5.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio
6.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"
7.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)

"agentfirstname"
*/
var tiendas;
function mostrar(tiendasfiltrado){
    $.each(tiendasfiltrado,function(i,persona){
        //each es un bucle que recorre el array. persona son todos los elementos del array
        $("#sugerencias").append("<li>"+persona.agentfirstname+"</li>")
        //append significa añadir(hacer un injerto)
    });
};
var criterio;
function almacenar(){
    criterio=$("#texto").val();
    $("#sugerencias").html("");
    var tiendas_filtrado=filtra(tiendas,criterio);
    mostrar(tiendas_filtrado);
}
//resultados
function filtra(tiendas, patron){
    var tiendas_filtrado=[];
    //corchetes vacíos significa Array vacío
    for(var item of tiendas){
        if(item.agentfirstname!= null && item.agentfirstname.includes(patron)){
        tiendas_filtrado.push(item)};
    }
     return tiendas_filtrado;
        //item es un elemento random. != significa NO
    
}
function init(){
    console.log("DOM Cargado");
$.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001",function(json){
    tiendas=json;
    console.log(tiendas);
     $("#sugerencias").html(mostrar);
    console.log(mostrar);
});
   $("#texto").keyup(almacenar);
}
$(document).ready(init);

