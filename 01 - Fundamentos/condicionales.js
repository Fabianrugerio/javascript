/* 

Condicionales

Son estructuras que permiten ejecutar diferentes bloques de código en funión de su una condicion es verdadera o falsa

Estas estructuras controlan el flujo de los programas

1. If - Se ejecuta solo si la condicion que se le pasa es verdadera, si la condicion es falsa, el código de if se omite

if (condicion){
  código que se ejecuta si es verdadera
}
2.Else - de lo contrario este bloque ejecuta un código cuando las condiciones anteriores no son verdaderas

if (condicion){
  código que se ejecuta si es verdadera
} else { 
  código que se ejecuta en caso de que la condicion anterior sea falso 
}
3. else if - Si no, nos ayuda a comprobar condiciones adicionales si la condicion if es falsa, podemos tener tantos else is como necesitemos, se escriben entre else e if

if (condicional) {
  // codigo
} else if (condicional) {
// codigo a ejecutar 
} else if (condicional) {
// codigo a ejecutar 
} else if (condicional) {
// codigo a ejecutar 
}

*/

// Bloque if

let numero = 10;

if (false) {
  console.log("Me ejecute por que la condicion es verdadera")
} else if (numero < 20) {
  console.log("Me ejecute por que la segunda condicion es verdadera")
} else { 
  console.log("Me ejecute por que la condiciones anteriores son falsas")
}