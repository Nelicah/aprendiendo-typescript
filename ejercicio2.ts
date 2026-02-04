// Función que suma dos números
function sumar(a: number, b: number): number {
  return a + b;
}

// Función que saluda
function saludar(nombre: string): string {
  return `Hola, ${nombre}!`;
}

console.log(sumar(5, 3));
console.log(saludar("Cande"));

//error
//console.log(sumar("5", 3)); Argument of type 'string' is not assignable to parameter of type 'number'