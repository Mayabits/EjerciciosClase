/*
+1.- Crea un fichero eventos.html e incluye JQuery -check
+2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla -check
+3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón -check
+3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón -check
+4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola -check
+5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla -check
+6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos -regular
+7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola -check
+8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también -check
+9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
+*/ 
function pressedbutton (){
    console.log("Botón pulsado");
}
function cosasdelform(evento){
    evento.preventDefault();
    
}
function init(){
    console.log("DOM Cargado Jquery");
    $("#miboton").click(pressedbutton);
    $("#otroboton").bind("click",function(){
        $("#otroboton").css("border-color","red");
    });
    $("#tercerboton").bind("click",function(){
        $("#tercerboton").css("background-color","green");
    });
    $("#campo").mousemove(function(){
        console.log("Can't play dead");
    });
    $("#campo").mouseleave(function(){
        console.log("Bye bye song");
    });

   /*$("#enviar").submit(if "#miformulario input" value <2 );
    $("#enviar").preventDefault();
  */
    $("#mensaje").on("click",function(){
        console.log("to button");
    });
    $("a").mouseenter(function(){
        console.log("ik ik ik");
    });
    $("a").mouseleave(function(){
        console.log("Bye blind mice!");
    });
   // $("#username").

}
$("document").ready(init);

//https://github.com/pepesan/ejemplos-jquery/commit/be7ec852bdb3ff3061e56c6783e22cd51d6af568

/* CORRECCIÓN DE DAVID

+function pulsado(){
+    console.log("Botón pulsado");
+}
+function cambiaBorde(){
+    $("#otroboton").css("border","1px red solid");
+    $(this).css("border","1px red solid");
+}
+function cambiaFondo(){
+    $(this).css("background-color","green");
+    //$("#tercerboton").css("background-color","green");
+}
+function muestraBlur(){
+    console.log("blur");
+}
+function muestraFocus(){
+    console.log("focus");
+}
+function gestionaLogin(evento){
+    
+    if($("#username").val()!="" &&
+      $("#contra").val()!=""){
+       //caso de que el formulario valide
+       
+    }else{
+       //Caso de novalidación
+       evento.preventDefault();
+    }
+}
+function entrado(){
+    console.log("ha entrado");
+}
+function salido(){
+    console.log("ha salido");
+}
+function validaCampo(){
+    if($("#campo").val()!=""){
+        $("#campo").css("border","1px solid green");
+    }else{
+        $("#campo").css("border","1px solid red");
+    }
+}
+function init(){
+    console.log("Dom cargado");
+   
 2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla

+    $("#miboton").click(pulsado);
+    
+
+
 3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón

+    $("#otroboton").click(cambiaBorde);
+    

 3.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón

+    $("#tercerboton").click(cambiaFondo);
+    /*
 4.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
 5.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla

+    var campo=$("#campo");
+    campo.focus(muestraFocus);
+    campo.blur(muestraBlur);
+    
 6.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos

+    $("#login").submit(gestionaLogin);
+    
 7.- Coloca un botón en el HTML y haz que cuando me hagan click en el saque un mensaje por consola

+    $("#b1").click(pulsado);
+  
 8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también
+

+    var enlace=$("#enlace");
+    enlace.mouseover(entrado);
+    enlace.mouseout(salido);
+  
 9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado

+    campo.blur(validaCampo);
+    
+}
+$(document).ready(init);
*/
