//Ejercicios_Repaso
//1. Crea un array de 200 posiciones
//2.-Imprime por pantalla los datos del array del ejercicio 1
//3. Cambia los datos de las posiciones 4, 7 y 18 del array y pon un valor de tipo String
//4. En las posiciones 9, 34 y 45 pon un valor booleano
//5. Crea un array de 30 posiciones
//6. Recorre el array anterior con todos los tipos de bucle (while, do-while, for, for-in) e imprime por pantalla los datos
//7. Define una variable booleana llamada tengoCarnet
//8. Define una sentencia condicional para que si la variable tengoCarnet es true saque un mensaje por pantalla diciendo que puedo conducir
/*9. Define una variable llamada nota (como la de un examen)
10. Haz un código para que dependiendo de dicha nota, si es menor que 5 sea suspenso, entre 5 y 6 un aprobado, entre 7 y 8 un notable y entre 9 y 10 un sobresaliente
*/
var posiciones=[]
for(var i=0;i<200;i++){
        posiciones.push("Posición_"+i);
    console.log(posiciones[i]);
}
posiciones[4]="cuatro";
posiciones[7]="luckynumber";
posiciones[18]="cachalote";
console.log(posiciones);
/*también puedes cambiar el contenido de un array con SPLICE hay varias formas, para REEMPLAZAR (insertar en una posición específica y eliminar simultáneamente). Hay que poner la posición donde insertar, el número de elementos a borrar y cualquier número de elementos a añadir. */
posiciones.splice(4,1,"four");
console.log(posiciones[i]);
posiciones[9]=true;
posiciones[45]=true;
posiciones[34]=false;
console.log(posiciones);
//Crear un array de 30 posiciones
var autoescuela=[];
for (var i=0;i<30;i++){
	autoescuela[i]=0;
}
var autoescuela=[];
for(var i=0; i<30;i++){
        autoescuela.push("Alumno_"+(i+1));
    console.log(autoescuela[i]);
}
var i=0;
while(i<30){
    console.log(autoescuela[i]);
    i++;
}
i=0
do{
    console.log(autoescuela[i]);
    i++;
}while(i<30);
//for in (each)
for(var i in autoescuela){
    console.log(autoescuela[i]);
}
var tengoCarnet=true;
var edad=18;
    if(tengoCarnet && edad>=18){
        console.log("Puedes conducir");
    }

var nota=7;
if(nota<5){
    console.log("looser!");
}else if(nota<7 && nota>=5){
    console.log("¡Aprobado!")
}else if(nota<9 && nota>=7){
    console.log("Notable");
}else if(nota<=10 && nota>=9){
        console.log("Sobresaliente");
}else if(nota>10){
    console.log("Matrícula de honor");
}
   
 