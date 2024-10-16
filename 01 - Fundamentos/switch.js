/* 
    Intrucciones condicionales if / else if / else
    1. Crear una vaiable dia y asignarle n valor númerico
    2. Con la sentencias if, else if y else, evaluar el valor de la variable dia con la siguientes condicionales: 
  - dia === 1 // Lunes 
  - dia === 2 // Martes
  - dia === 3 // Miercoles
  - dia === 4 // Jueves
  - dia === 5 // Viernes
  - dia === ? // Dia no valido
*/
/* let dia = 5;
if (dia === 1) {
  console.log ("Lunes")
} else if (dia === 2) {
  console.log ("Martes")
} else if (dia === 3) {
  console.log ("Miercoles")
} else if (dia === 4) {
  console.log ("Jueves")
} else if (dia === 5) {
  console.log ("viernes")
} else {
  console.log("Día no válido") 
}
  */
/* 
  Switch
  Es na estructura de control de flujo condicional, pero se utlza cuando tenemos multiples casos posibles par evaluar una expresion.
  Es mas eficiente y legible en situaciones donde se quiere comparar una sola variable con varios valores posibles
  Sintaxis:
  switch (expresion){
  case valor1: 
    // Codigo que se ejecuta
    break;
  case valor2: 
    // Codigo que se ejecuta
    break;
  case valor3: 
    // Codigo que se ejecuta
    break;
  default:
    // Codigo que se ejecuta por default
  }
  */
  let dia = 2;
  switch (dia){
    case 1:
      console.log("Lunes")
      break;
    case 2:
      console.log("Martes")
      break;
    case 3:
      console.log("Miercoles")
      break;
    case 4:
      console.log("Jueves")
      break;
    case 5:
      console.log("Viernes")
      break;
    default:
      console.log("Día no válido")
    }
  /* 
  
    Ejercicio Switch
    1. Crear una variable pokemon y asignarle un valor en string con el nombre de un pokemon
  */
  let pokemon = prompt ("¿Que pokemon escoges?");
  
  switch (pokemon) {
    case "pikachu":
      console.log(`Tu pokemon es ${pokemon} y es de tipo electrico!`)
      break;
    case "charmander":
      console.log(`Tu pokemon es ${pokemon} y es de tipo fuego!`)
      break;
    case "gengar":
      console.log(`Tu pokemon es ${pokemon} y es de tipo fantasma y veneno!`)
      break;
    case "gardevoir":
      console.log(`Tu pokemon es ${pokemon} y es de tipo psiquico y hada!`)
      break;
    default:
      console.log(`¿Quien es ese pokemon?`)
  }