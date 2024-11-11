/* 

clases

Una clase es una plantilla para crear objetos.

Es una forma moderna y natural de trabajar con la programacion orientada a objetos.

Los nombres de las clases se recomiendan escribir en mayúsculas

Método constructor

El método constructor es un método que se ejecuta autimaticamente cuando se crea una nueva instancia de la clase.

Dentro del método constructor, pasamos las propiedades y valores de la clase

Las propiedades pasan como parámetros y luego asignan con 'this'

Sintaxis básica

class nombreClase {
  //  Método constructor
  constructor(par1, par2){

    this.par1 = par1;
    this.par2 = par2;>}<
  }
}

Instancias de clases para crear un objeto usando la clase, se utiliza la palabra 'new', esto invoca al constructor de la clase

Sintaxis

new NombreClase(par1, par2)

Esta instancia se asigna a una variable a constante

Métodos de clase

Se definen dentro de una clase y asignan autómaticamente en el 'prototipo' del objeto. Esto permite que todas las instancias compartan el mismo método

nombreMetodo(parametros){
  // Código que se ejecuta

}

*/

// Definir la clase mascota

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }

  saludo(){
    console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
  }

}

// Instancear la clase 'Mascota'. Creamos un objeto con la plantilla 'Mascota'

let mascota1 = new Mascota("Lorenzo", 5)
let mascota2 = new Mascota("Hermenejildo", 4)

// Accedemos a los datos de las instancias

console.log(mascota2.nombre);
console.log(mascota2.edad);

// Lanzar los métodos de los objetos

mascota1.saludo()
mascota2.saludo()