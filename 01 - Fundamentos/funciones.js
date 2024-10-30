/* 

  Funciones

  Son bloques de codigo reutilizables ya que realizan una tarea especifica ya que realizan el codigo de una y otra vez podemos asiganr una funcion para una sola vez y utilizar cuando querramos

  Conceptos de las funciones

  *Definir una funcion: Creamos una funcion con un nombre y los datos que llamamos parametros(opcionales)

  *Invocamos: llamamos la funcion cuando ocuAMOS QUE SE EJECUTE SU CODIGO ES DECIR  que haga su tarea

  *Retorna: Puede devolver un resultado la funcion(opcional)

  Sintaxis

   Funcion nombreFuncion(parametro1, parametro2, parametro3...) (//codigo que se ejecute return resultado;)

   function -> es la palabra clave para declrara una funcion 
   nombreFuncion -> Es el nombre que asignamos  a la funcion, este nombre tilizamos para invocar

   parm1, parm2 ... -> Son los datos que le paásamos a la funcion para que trabaje con elllos en su bloque de codigo

   cuerpo de la funcion -> el codigo que ejecuta y realiza la tarea de la funcion
  
   return -> devuelve o retorna  un resultado (opcional)
*/

function saludo() {
   console.log("Hola nariz de bola 🤣")
}

/* Saludo(); */

function saludoPersonalizado(nombre) {
  console.log (`Hola querido ${nombre} tienes nariz de bola!!`)
}

/* saludoPersonalizado("Patata") */

function sumar (a, b) {
  return a + b 
}

let resultado = sumar (10,20)
console.log ( resultado * 5)
