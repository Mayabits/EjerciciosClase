/*
1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios
2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.
3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
4.- Imprime por pantalla el nombre del primer objeto
5.- Imprime por pantalla el email del segundo objeto
6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"
7.- Imprime el valor del nombre del primer objeto
8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"
9.- Imprime el email por pantalla del segundo objeto
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto
12.- Añade un método toString similar en el segundo objeto
13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
14.- Añade un método setter y otro getter al primero objeto por cada propiedad definida en él, sin contar los métodos. 
15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto
19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos
20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion
21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto
22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP.
23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto
24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor.
*/

/*2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad.
*/

var Cliente={
    nombre:"Samira",
    direccion_fisica:"Avda.Peñagrande,122",
    email:"mirasam@gmail.com",
    tlf:639542178,
    persona_contacto:"Tarik",
    Setnombre:function(n){
        this.nombre=n},
    toString: function (){
        return "nombre:"+this.nombre+", dirección: "+this.direccion_fisica+", email: "+this.email+", persona de contacto: "+this.persona_contacto+".";
    }, 
        setNombre: function (n) {
        this.nombre=n;
   
        },
        getNombre: function(){
        return this.nombre;
        },
        setDireccion:function(c) {
        this.direccion_fisica=c;
        },
        getDireccion: function(){
        return this.direccion_fisica;
        },
        setEmail: function (e) {
        this.email=e;
        },
        getEmail: function(){
        return this.email;
        },
        setTel: function (t) {
        this.tlf=t;
        },
        getTel: function(){
        return this.tlf;
        },
        setContacto: function (c) {
        this.persona_contacto=c;
        },
        getContacto: function(){
        return this.persona_contacto;
        },
    }

    
/* 3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores.
*/

var segundoCliente={
    nombre:"Lorena",
    direccion_fisica:"Calle de la Oca, 24",
    email:"lalorethebest@gmail.com",
    ctlf:678954373,
    persona_contacto:"Carmen",
    Setemail:function(e){
        this.email=e},
    toString: function (){
        return "nombre: "+this.nombre+", dirección: "+this.direccion_fisica+", email: "+this.email+", persona de contacto: "+this.persona_contacto+".";
    }
};
//4.- Imprime por pantalla el nombre del primer objeto

console.log(Cliente.nombre)

//5.- Imprime por pantalla el email del segundo objeto

console.log(segundoCliente.email)

//6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta"

Cliente.Setnombre("Maderas Peralta");

//7.- Imprime el valor del nombre del primer objeto

console.log(Cliente.nombre)

//8.- Cambia el email del segundo objeto por el valor "info@micasuci.com"

segundoCliente.Setemail("info@micasuci.com");

//9.- Imprime el email por pantalla del segundo objeto

console.log(segundoCliente.email)

/* 
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto el nombre de cada propiedad y el valor asociado a cada propiedad
-he añadido lo siguiente a la respuesta del 2:
toString: function (){
        return "nombre: "+this.nombre_del_cliente+", dirección: "+this.direccion_fiscia+", email: "+this.email+", persona de contacto: "+this.persona_contacto+".";
    }
*/
//11.Imprime por pantalla el valor devuelto por el método toString del primer objeto

console.log(Cliente.toString())

//12.- Añade un método toString similar en el segundo objeto
/*-he añadido esto al punto 3: 
toString: function (){
        return "nombre: "+this.nombre+", dirección: "+this.direccion_fisica+", email: "+this.email+", persona de contacto: "+this.persona_contacto+".";
    }
*/
//13.Imprime por pantalla el valor devuelvo por el método toString del segundo objeto
console.log(segundoCliente.toString)

/*14.- Añade un método setter y otro getter al primer objeto por cada propiedad definida en él, sin contar los métodos. 
-ver ej.2 */

//15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS



/*
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto
*/









