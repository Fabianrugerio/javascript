/* 
  Ejemplo condicionales if / else
  1. Declarar una variable edad  y le aignamos un numero valor numerico
  2. Comprobamos si edad es igual o mayor que 18, monstramos el mensaje: "Eres mayor de edad!"
  3. Si edad no es mayor que 18, montramos el mensaje: "Eres un bebe!" 
*/
/* let edad = prompt ("¿Cuantos años tienes?")
if (edad >= 18){
  alert ("Eres mayor de edad!")
} else {
  alert ("Eres un bebe!")
} */
/* El operador ternario es un forma masconcisa de escribir una condicion if / else.
  Trabaja con tres operandos:
  1. Una condicion
  2. La expresion si la condicion es verdadera
  3. La expresion si la condicion es falsa.
  Sintanxis:
  condicion ? expresionSiVerdadera :expresionSiFalsa
*/
let edad = 12; 
let resultado = edad >= 18 ? "Eres mayor de edad!" : "Eres un bebe!"
console.log (resultado)
(edad >= 18) && (edad < 30) ? "eres joven" :
(edad >= 30) && (edad < 60) ? "eres adulto" :
(edad >= 60) && (edad < 90) ? "eres viejito" : "eres inmortal"