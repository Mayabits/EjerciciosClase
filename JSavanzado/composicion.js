/*
1.- Crea un fichero HTML relacionado con un fichero JS
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
3.- Crea un objeto de la clase Alumno
4.- Añade los getter y setter a las clase Alumno
5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
8.- Crea un objeto de la clase Nota
9.- Mete los getter y los setter de la clase Nota
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para propiedad. Los parámetros deben poder ser opcionales. 
11.- Crea un objeto de la clase Nota pero pasando los dos parámetro sen su creación
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
13.- en el constructor añade un parámetro más que será el array de notas
14.- Crea un getter y un setter para notas
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio /push
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/
var Alumno=function(nombre="",dni="",tlf=0,email="",notas=[]){
    this.nombre=nombre,
    this.dni=dni,
    this.tlf=tlf,
    this.email=email,
    this.notas=notas,
    this.getnombre=function(){
        return this.nombre;
    };
    this.setnombre=function(a){
        this.nombre=a;
    };
     this.getdni=function(){
        return this.dni;
    };
    this.setdni=function(id){
        this.nombre=id;
    };
     this.gettlf=function(){
        return this.tlf;
    };
    this.settlf=function(tel){
        this.tlf=tel;
    };
     this.getemail=function(){
        return this.email;
    };
    this.setemail=function(e){
        this.email=e;
    };
     this.getnotas=function(){
        return this.notas;
    };
    this.setnotas=function(pa){
        this.notas=pa;
    };
    this.addNota=function(notas){
        this.notas.push(notas);
    }
    };
var claseA=new Alumno;
console.log(claseA);
var claseB=new Alumno;
console.log(claseB);
var Nota=function(valor=0,asignatura=""){
    this.valor=valor,
    this.asignatura=asignatura,
         this.getvalor=function(){
        return this.valor;
    };
    this.setasignatura=function(subject){
        this.asignatura=subject;
    };
};
var Global=new Nota;
    console.log(Global);
var Trimestre1=new Nota;
    console.log(Trimestre1);
var nota1=new Nota(9,"Educación Plástica");
var nota2=new Nota(10,"Educación Física");
var nota3=new Nota(6,"Ciencias Naturales");
var nota4=new Nota(7,"Matemáticas");
//cada notaX que añado se coloca al final del Array.
var Spinelly=new Alumno ("Spinelly","77889966B",639528477,"labandadeSpinelly@labandadelpatio.com");
    console.log(Spinelly);
Spinelly.addNota(nota1);
Spinelly.addNota(nota2);
Spinelly.addNota(nota3);
Spinelly.addNota(nota4);
    console.log(Spinelly);


    this.mediaNotas=function(){
        var media=0;
        var suma=0;
        var num·Elementos=this.notas.length;
        for( let item of this.notas){
            suma+=nota.valor;
        }
        media=suma/numelementos;
        return media;
    };
