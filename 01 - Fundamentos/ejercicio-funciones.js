/* 

  Ejercicio fnciones

  1. Vamos a definir una variable llamada 'heroe' que contenga un dato en 'string' con el nombre de un superheroe
 
  2. Definimos na funcion llamada 'obtenerPoder'.
 
  3. Esta funcion recibe el  parametro heroe que sera validado en el cuerpo de la funcion
 
  4. En el cuerpo de la funcion
  
   Si heroe === "superman" -> "Tu poder es superfuerza"
   Si heroe === "flash" -> "Tu poder es supervelocidad"
   Si heroe === "batman" -> "Tu poder es supermillonario"
   Si no -> "no te invitaron a la fiesta!"

  5. Invocar a la funcion con su parametro 'heroe'

*/

let heroe = prompt ("¿Que heroe escoges Superman,Batman o Flash?");

function obtenerPoder (heroe) {
  if (heroe === "Superman") {
  console.log("Tu poder es superfuerza")
  }else if (heroe === "Flash"){
  console.log("Tu poder es supervelocidad")
  }else if (heroe === "Batman"){
  console.log("Tu poder es supermillonario")
  }else {
  console.log("no te invitaron a la fiesta! ")
}
}

obtenerPoder(heroe)