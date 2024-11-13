/* 

Practica de objetos y clases

1. Crea una clase llamada "Arma"

Debe tener las siguientes propiedades en su constructor

  *nombre(string): nombre de arma
  *tipo(string): tipo de arma
  *daño(numero): cantidad de daño que causa el arma

  Agrega un método llamado describir que imprima la consola:

`Arma: Galadhrim | Tipo: arco | Daño: 40 `

2. Crea un objeto "Arsenal" que contenga:

  *Una propiedad llamada "Armas" que sea un array vacio
  *un método agregarArma que recibe un arma como parámetro y la agregue al array "Armas"

3. Instancia de Armas

  *Crea tres armas usando la clase "Arma" con diferentes valores para nombre, tipo y daño

4. Agrega las armas al arsenal

  *Usa el método agregarArma del objeto arsenal para agregar cada una de las armas al array armas

5. Muestra la Descripción de las Armas

  *Usa un bucle for para recorrer el array armas dentro del objeto Arsenal
  *En cada iteración, llama al método describir de cada arma para mostrar sus detalles en la consola

*/

class Arma {
  constructor(nombre, tipo, daño){
    this.nombre = nombre;
    this.tipo = tipo;
    this.daño = daño;
  }

  describir(){
    console.log(`Arma: ${this.nombre} | Tipo: ${this.tipo} | Daño: ${this.daño}`)
  }
}

let Arsenal = {
  armas: [],
  agregarArma(Arma){
      this.armas.push(Arma);
  }
}

let arma1 = new Arma("Bulldog", "Rifle", 40)
let arma2 = new Arma("Ballesta", "Arco", 10)
let arma3 = new Arma("Hacha", "Melee", 20)

Arsenal.agregarArma(arma1)
Arsenal.agregarArma(arma2)
Arsenal.agregarArma(arma3)

for( let i = 0 ; i <= 2; i++ ){
  (Arsenal.armas[i].describir())
}

/* console.log(Arsenal.armas)
console.log(arma1)
console.log(arma2)
console.log(arma3) */