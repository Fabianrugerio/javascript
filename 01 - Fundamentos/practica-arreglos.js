/* 

  Practica Arreglos - Liga Sperheroes

  1. Defiir un arreglo llamado 'heroes' que contega 5 nombres de superheroes y muestralos en la consola.
  2. Agregar un nuevo super heroe al final de array.
  3. Eliminar al primer heroe al final de array
  4. Cambiamos al 3er heroe por otro distinto
  5. Ordenar Alfabaticamente el array 'heroes'
  6. Crear un nuevo array llamado enemigos, con los ultimos 3 heroes del array con un metodo
  7. Monstrar por consola los dos arrays: heroes y enemigos.

*/

let superheroes = ["Batman", "Spiderman", "Spidergwen", "Deadpool", "Saitama"];
superheroes.push("Ciclista sin licencia")
superheroes.shift();
superheroes[2] = "Dr.Strage";
superheroes.sort();
let enemigos = superheroes.splice(2,5)
console.log(superheroes);
console.log(enemigos);


