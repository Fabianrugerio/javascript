/* 

  Los CICLOS o BUCLES nos permiten ejecutar un bloque de código varias veces
  Facilita tareas repetitivas y ahorrando código y tiempo

*/
/* 

  1. for

  Este bucle tiene trs partes claves:

    1.Inicializacion de una variable
    2. Condicion que evalua el valor de la variable
    3. Actualizacion del valor de la variable

  Sintaxis

  for (inicializacion ; condicion ; actualizacion) {// Código que se ejecuta}

*/

for ( let i = 1 ; i <= 5 ; i++ ) {
  // Código que se ejecuta
  console.log("Mensaje:" +  i)
}

for( let i = 5 ; i >= 0 ; i-- ) {
  console.log(i)
} 

/* 

  2. while

  Ejecuta su ciclo de código mientras la condicion específicada sea verdadera

  Sintaxis:

  Se define la variable fuera del ciclo

  let nombreVariable = valor;

  while (condicion) {
  // Código a ejecutar
  }

  nombreVariable++ // Actualización

*/

let contador = 0; // Definición

while (contador < 3) { // Condición
  console.log("Gato " + contador);

  contador++; // Actualización
}

let veces = 5;

while (veces > 2) {
  console.log("veces :" + veces);

  veces--;
}

/* 

  3. do...while

  Es similar a while, pero garantiza que el código se ejecute al menos una vez

  Primero se ejecuta el código y luego la condición

  SIntaxis: 

  // La variable se define fuera del ciclo

  let nombreVariable = valor; // Definición

  do {
    //Código que se ejecuta

    nombreVariable++; // Actualización
  } while (condición)

*/

let numero = 10;

do {
  // Código que se ejecuta al menos una vez
  console.log("El numero es " + numero);

  numero--;
} while (numero > 1)