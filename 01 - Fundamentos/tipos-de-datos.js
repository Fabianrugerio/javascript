/* 

Tipos de Datos 
Los tipos de datos se dviden en dos categorias: Primitivos y Complejos

1. Tipos de datos Primitivos
Datos básicos que no se consideran "objetos" y no tienen "métodos"

Tipo Number o Número
Representacion de valores númericos ya sea enteros o con decimales(punto flotante)

Los strings o cadenas de caracteres
Se usa para representar texto. El texto se coloca entre comillas dovles o simples "texto" 'text'

Los boolean o boleanos
Estos representan un valor lógico que puede ser 'true' o 'false'

Undefined o indefinido
Es el valor que se le asigna a una variable que ha sido declarada pero no inicializada



2. Tipos de datos complejos

Array o Arreglo
Conjunto de datos que los almacena en una lista ordenada de elementos. Los datos dentro de los arreglos se escriben entre corchetes [] y separados por comas , y cada palabra tiene que ir entre comillas ""
*/

/* Numbers */

let miNumero = 19
let miNumeroDecimal = 6.8

console.log(miNumero)
console.log(miNumeroDecimal)

/* Strings */

let miNombre = "Fabian";
let miApellido = "Rodriguez";

console.log(miNombre)
console.log(miApellido)

/* Booleans */

let miVerdad = true;
let miMentira = false;

console.log(miVerdad)
console.log(miMentira)

/* Undefined */

let x; // Declarar una variable sin iniciar

console.log(x)

x = prompt("Cual es tu número favorito?")

console.log(x) // valor que el usuario introduzca


/* Array */

let misFriutasFavoritas = ["platano","uvas","durazno"]
let misNumerosSuerte= [5,10,15,2003]
let otroArray = ["puchunguito",56,true]

console.log(misFriutasFavoritas)
console.log(misNumerosSuerte)
console.log(otroArray)