// Interfaces (objetos tipados)
interface Pelicula {
  titulo: string;
  año: number;
  genero: string;
  puntuacion: number;
}

// Ejemplos
const pelicula1: Pelicula = {
  titulo: "El Señor de los Anillos",
  año: 2001,
  genero: "Fantasía",
  puntuacion: 5.0,
};

const pelicula2: Pelicula = {
  titulo: "Your Name",
  año: 2016,
  genero: "Animación",
  puntuacion: 9.0,
};

// Array de películas
const misPeliculas: Pelicula[] = [pelicula1, pelicula2];

//Función que recibe una pelicula y la muestra
function mostrarPelicula(pelicula: Pelicula): void {
  console.log(`${pelicula.titulo} (${pelicula.año}) - ${pelicula.genero}`);
  console.log(`Puntuacion: ${pelicula.puntuacion}/10`);
}

mostrarPelicula(pelicula2);

//Función filtrar por género el array
function filtrarPorGenero(peliculas: Pelicula[], genero: string): Pelicula[] {
  return peliculas.filter(p => p.genero === genero);
}

const peliculasAnimacion = filtrarPorGenero(misPeliculas, "Animación");
console.log(peliculasAnimacion);