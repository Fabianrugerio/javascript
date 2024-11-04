/* 

Recorrer arreglos

  Podemos acceder a cada dato de un arreglo a travez de su indice. Ya sea para obtener el dato o hacer algo con ese indice

*/

/* Definir un array */

let colores = ["rojo", "negro", "verde", "azul", "rosa"]
// indices       0        1        2

/* Imprimimos por consola los datos del array */

/* console.log(colores[0])
console.log(colores[1])
console.log(colores[2]) */

/* console.log(colores.length) */

colores.push("magenta", "purpura")

/* Recorrer el array con el bucle for */

for ( let i = 0 ; i < colores.length; i++ ){
  // Código a ejecutarse
  console.log(colores[i])
}

/* 

Bucle for.....of

Es una manera simple y moderna de recorrer arrays en JS . Este nos permite acceder directamente al valor de cada elemento si necesidad de usar indices. 

Sintaxis 

for(const elemento of nombreArray) {
// Código a ejecutar para cada elemento del array
}

*/

for(const color of colores){
  // Código a ejecutar
  console.log( `Colorcito: $(color)` )
}


/* Ejercicio para recorrer un arreglo con for.....of */

let agentes = ["Yoru", "Reyna", "Gekko", "Clove",]

for ( let o = 0 ; o < agentes.length; o++ ){
  // Código a ejecutarse
  console.log(agentes[o])
}

for(const agente of agentes){
  console.log( `Valorant: $(agente)` )
} 
