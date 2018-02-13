/*
0.- Crea un fichero HTML que incluya un fichero JS externo
1.- Crea una clase llamada Animal, que tenga una propiedad  llamada edad, que sea inicializada a 0
2.- Crea un objeto de la clase Aminal, llamado animalico
3.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
4.- Cambia la edad de animalico a 3
5.- Imprime por pantalla la edad de animalico
6.- Crea una nueva clase Gato que herede de Animal
7.-El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
8.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
9.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
10.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
11.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a ""
12.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
13.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
14.- Imprime el objeto por pantalla, así como su edad y su nombre
*/
var Animal=function(edad=0){
    this.edad=edad
};
var animalico=new Animal();
    console.log(animalico.edad);
animalico.edad=3;
    console.log(animalico.edad);
var Gato=function(){
    Animal.call(this);
};
    console.log(Gato);
var animalico2=new Animal(2);
Gato=function(edad, nombre=""){
    Animal.call(this.edad);
    this.nombre=nombre;
};
var gatete=new Gato(1);
    console.log(gatete.edad);

var gatete2=new Gato(0,"Nyska");
console.log(gatete2.edad);
console.log(gatete2.nombre);