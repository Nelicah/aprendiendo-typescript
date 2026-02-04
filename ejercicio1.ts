// 1. Variables
let nombre: string = "Cande";
let edad: number = 36;
let soyDev: boolean = true;

// 2. Array
let lenguajes: string[] = ["JavaScript", "React", "Node.js"];

// errores
//edad = "36"; error: Type 'string' is not assignable to type 'number'

console.log(`Hola, soy ${nombre} y tengo ${edad} años.`);
console.log(`Mis lenguajes: ${lenguajes.join(", ")}`); //join() convierte un array en un string usando los elementos con el separador que le indiques. Por defecto lo hace con comas pero sin espacios.
/* console.log(`Mis lenguajes: ${lenguajes}`); 
Mis lenguajes: JavaScript,React,Node.js */

