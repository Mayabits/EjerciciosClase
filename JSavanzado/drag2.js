/*
1.- Crea un fichero html con un js asociado
2.- En el html mete un listado desordenado con 3 elementos dentro llamado origen
3.- En el html mete un listado desordenado vacío llamado destino
4.- Haz que cualquier elemento del listado de origen se pueda arrastrar al destino
5.- Haz que cuando se pase un elemento al destino se elimine (no sólo visualmente) del origen



function init() {
  $('#makeMeDraggable').draggable();
  $('#makeMeDroppable').droppable( {
    drop: handleDropEvent
  } );
  
  
  htmlElement.addEventListener('dragend', function(event){
    if(event.dataTransfer.dropEffect !== 'none'){
        $(this).remove();
    }
});
___________

function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
});

//Recoger elemento arrastrable//
function evdragstart(ev,el) { //ev= el evento, el=elemento arrastrado.
    cont1=el.parentNode; //guardamos el elemento padre del elemento en una variable.
    ev.dataTransfer.setData("text",ev.target.id);	//guardamos datos del elemento. 
}
//mientras se arrastra:
function evdragover (ev) { //ev=el evento.
    ev.preventDefault(); //quitar comportamiento por defecto.
}
//Al soltar el elemento arrastrado
function evdrop(ev,el) { //ev=el evento; el=receptor de soltado
    ev.stopPropagation(); //impedir otras acciones 
    ev.preventDefault(); //quitar comportamiento por defecto
    var data=ev.dataTransfer.getData("text"); //recogemos datos del elemento
    mielem=ev.target.appendChild(document.getElementById(data)); //obtenemos el elemento arrastrado
    cont1.appendChild(mielem); //ponemos el elemento arrastrado en el mismo sitio donde estaba.
    mielem2=mielem.cloneNode(true); //creamos una copia del elemento arrastrado.
*/
/*
function init(){
    console.log("Dom cargado");
    $("#uno, #dos, #tres").draggable();
    $("#uno, #dos, #tres").droppable( {
        drop:handleDropEvent
    } ) ;
    var suelta=document.getElementById("#destino");
    coge.addEventListener("dragstart",comenzar);
    suelta.addEventListener("dragover",sobrevolar);
    //c2.addEventListener("dragleave",salir);
    suelta.addEventListener("drop",soltar);
    uno.addEventListener("dragend",function(event){
        if(event.dataTransfer.dropEffecct !== "none"){
            $(this).remove();
        });
    });
    var boton=document.getElementById("boton");
    boton.addEventListener("click",
        function(evento){
            console.log(evento);
            console.log(evento.target);
            console.log(evento.target.destino);
        }
    );
    
    function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}
}
document.addEventListener("DOMContentLoaded",init);
*/

var almacenaElemento = "";
var almacenaId = "";
function empezando(event){
    console.log("¡Empieza el movimiento!");
    var iden=event.target.id;
    event.dataTransfer.setData("text","Soy la primera caja");
    almacenaElemento = event.target.outerHTML;
    almacenaId = event.target.id;
    console.log(almacenaId);
    console.log(almacenaElemento);
};
function arrastrando(){
    console.log("¡He entrado en el segundo div!");
    
};
function final (){
    document.preventDefault;
    document.getElementById(almacenaId).outerHTML="";
    document.getElementById("destino").innerHTML+=almacenaElemento;
    
    
}

function init(){
    console.log("DOM cargado");
    var ele1=document.getElementById("ele1");
     var ele2=document.getElementById("ele2");
     var ele3=document.getElementById("ele3");
    var destino=document.getElementById("destino");
   ele1.addEventListener("dragstart",empezando);
    //ele1 es el id de la <li>
    ele2.addEventListener("dragstart",empezando);
    ele3.addEventListener("dragstart",empezando);
    destino.addEventListener("dragenter",arrastrando);
    destino.addEventListener("dragover",final);
};
document.addEventListener("DOMContentLoaded", init);
 

 



 
