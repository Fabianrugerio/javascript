/* 

Concatenacion

La concatenacion es un procesos para unir o combinar dos o mas cadenas de texto en una sola

Hay dos formas de realizar la concatenacion

1. Operador (+)
2. Tamplate strings (``) alt gr + c portuguesa - Utilizamos los backtics a acentos invertidos, dentro ponemos insertar cadenas de texto, variables y expresiones
*/

// Concatenar con operador (+)

let nombre = "Fabian";
let apellido = "Rodriguez"

let nombreCompleto = nombre + " " + apellido

console.log(nombreCompleto)

// Concatenar con Tamplate Strings

let saludo = `¡Hola ${nombre} ${apellido}! ¿Cómo estas? Sabias que 2 + 2 es igual a ${2 + 2}`

console.log(saludo)