var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
console.log(meses);
var valores = [true, 5, false, "hola","adios", 2];
console.log(valores);
console.log(valores[1],valores[5]);
console.log(valores[3],valores[4]);
console.log(valores[1]+valores[5]);
if (valores[1] >valores[5]){
    console.log("es MAYOR");
}
else{
    console.log("Mala suerte, vuelve a intentarlo");
}
var nombre=[];
for(var i=0; i<10;i++){
		nombre.push("Nombre_"+i);
	console.log (nombre[i]);
}
for(var i = 0; i < 10; i++) {
  console.log(nombre);
}
