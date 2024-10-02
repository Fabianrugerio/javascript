/* 

Practica condicionales

Sigue las intrucciones y escribe el código

1. Declarar una variable llamada edad y asignarle un valor numérico.
2. Imprimir por consola el valor de la variable.
3. Con el bloque if es igual o mayor a 18.
4. Si esta condicion es true, mostrar el mensaje "Eres mayor de edad"
5. Agregar otra condicion con el bloque "else if", evaluar si "edad" es menor que 18.
6. Si esta condicion es true, mostrar en consola "Eres menor de edad".
7. Con el bloque "else", evaluar cualquier otro dato y en caso de que las condiciones anteriores sean "false", mostrar por la consola el mensaje "Eres un alien".
8. Dentro de los bloques, else, if, else if, cambiar los console.log por alerts.
9. Cambiar el valor de la variable edad por un "promt" para que este dato sea introducido por el usuario. promt("¿Que edad tienes?").
10. 5 minutos para realizar commit y push con el mensaje "Esta es mi pratica de js, si no es correcta repurebeme, no guardo rencor como Franco Escamilla"

*/

let edad = prompt("¿Que edad tienes?")
let a = edad > 18
if (edad > 18) {
  alert("Eres mayor de edad")
  } else if (edad < 18) {
    alert("Eres menor de edad")
  } else {
    alert("Eres un alien")
  }

console.log(edad)