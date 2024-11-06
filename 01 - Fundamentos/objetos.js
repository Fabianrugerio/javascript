/* 

  Objetos

  Es una coleccion depropiedades y mètodos

  Las propiedades describen las caracterìsticas del objeto

  Los mètodos describen los comportamientos del objeto

  Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, undefined, otros objetos e incluso funsiones

  Sintaxis

  let nombreObjeto = {
  //Propiedades y Métodos
  };

  Las propiedades dentro de un objetos, se escriben en palabras "clave": "valor"

  let nombre = Fabian // Variable

  nombre : Fabian, // Propiedad

  Las propiedades de un objeto se separan por "," despues del "valor"

  Las claves de las propiedades pueden tener mas de una palabra, pero se deberan de escribir entre "" o ''

  "nombre real" = "Fabian",

  Tambien se pueden escribir en formato camel case y sin comillas

  nombreReal = "Fabian",

*/

let personaje = {
  nombre : "Frodo Bolsón",
  edad : 52,
  residencia : "La Comarca",
  poderes : false,
  habilidadesHumanas : 
  ["Valor", "Determinacion", "Compañerismo"]
}

/* Accedemos al valor de las propiedades del objeto */

console.log(personaje.nombre);
/* console.log(personaje["Habilidades humanas"][0]); */
console.log(personaje.habilidadesHumanas)

/* Agregar y borrar propiedades de objeto */

personaje.enemigos = ["Saurón", "Gollum"];

delete personaje.poderes;

/* 

Crear un objeto llamado mascota que tenga tres propiedades: nombre, tipo, edad, y con sus respectivos valores

anidamos objetos

Nombramos al objeto anidado y lo definimos con las llaves {} - Dentro de las llaves se declaran las propiedades en pares "clave" : "valor"

Métodos

Un método es una funcion que se define como propiedad de un objeto

Sintaxis

nombreClave : funcion(parametroe) {
// Código que se ejecuta
}

this

Es una palabra reservada que se refiere al objeto actual, y sirve para acceder a sus propiedades del mismo,

*/

let mascota = {
  nombre : "Panda",
  tipo : "Gato",
  edad : 9,

  // Objeto Anidado
  fisico : {
    estatura : 20,
    peso : 3,
    color : ["negro", "blanco"]
  },

  // Declaramos un método
  saludo : function(amo) {
    // Código  que se ejecuta al invocar la funcio
    alert(`miau miau miau. Me llamo ${this.nombre} y mi amo es ${amo} `); 
  } 
}

console.log(mascota.fisico.peso)
console.log(mascota.fisico.estatura)
console.log(mascota.fisico.color)

mascota.fisico.colorOjos = "verde"; // Agregar

delete mascota.fisico.color; //Eliminamos

// Accedemos al método saludo del objeto mascota

mascota.saludo("Fabian");