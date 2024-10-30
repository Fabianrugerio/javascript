/* 
  Practicas condicionales

  Sigue las instrucciones y escribe el codigo 

  1. Declarar una variable llama edad y asignarle un valor numerico
  2. Imprimir por consola el valor de la variable edad.
  3. Con el bloque "if" evaluar si "edad" es mayor o igual que 18
  4. Si la condicion es "true", mostrar por consola el mensaje: "Eres mayor de edad!"
  5. Agregar otra condicion con el bloque  "else if" y evaluar si edad es menor que 18
  6. Si esta condicion es "true", mostrar por consola el mensaje: "Eres menor de edad"
  7. Con el bloque "else", evaluar cualquier otro dato y en caso de las condicionales anteriores sean falsas "false", mostrar por consola el mensaje: "Eres un alien 👽"
  8. Dentro de los bloques de if, else if, cmbiar los "console.log" por "alert"
  9. Cambiar el valor de la variable "edad" por un "prompt". Para que este dato sea introducido por el usuario y evaluando por las condicionales

  prompt ("¿Que edad tienes?")
*/

let edad = prompt ("¿Que edad tienes?");

if (edad >= 18) {/* console.log */ alert ("Eres mayor de edad!")} 
else if (edad < 18) {/* console.log */ alert("Eres menor de edad")} else {/* console.log */ alert ("Eres un alien 👽")}