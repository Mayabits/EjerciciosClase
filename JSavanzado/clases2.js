class Moto{
    /*para acumular atributos necesitamos la función constructor(parámetros que quiero pasar a los atributos). Fuera de la función constructora van los métodos(resto de funciones)*/
    constructor(matricula="",km=0){
        this.matricula=matricula,
        this.km=km,
    };
}
/*var Moto=function(km,matricula) {
    this.matricula="",
    this.km=0,
    this.setkm= function(n){
        this.km=n;
    };
    this.getkm=function(){
        return this.km;
        };
    this.setmatricula= function(m){
        this.matricula=m;
    };
    this.getmatricula=function(){
        return this.matricula;
        };
    };
    */
var miburra=new Moto();
console.log(miburra);

miburra.matricula="SA1234H";
console.log(miburra.matricula );

var motoraton=new Moto();
console.log(motoraton);

var soa=new Moto();
console.log(soa);

var Animal=function(){
    this.edad=0
};
var animalico=new Animal();
    console.log(animalico);

animalico.edad=3;
console.log(animalico);