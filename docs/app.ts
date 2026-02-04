interface Pelicula {
  id: number;
  titulo: string;
  año: number;
  genero: string;
  puntuacion: number;
  descripcion?: string;
}

const peliculas: Pelicula[] = [
  { 
    id: 1, 
    titulo: "Spirited Away", 
    año: 2001, 
    genero: "Fantasía", 
    puntuacion: 9.5,
    descripcion: "Una niña entra en un mundo mágico de espíritus"
  },
  { 
    id: 2, 
    titulo: "Your Name", 
    año: 2016, 
    genero: "Romance", 
    puntuacion: 9.0,
    descripcion: "Dos adolescentes intercambian cuerpos misteriosamente"
  },
  { 
    id: 3, 
    titulo: "Akira", 
    año: 1988, 
    genero: "Acción", 
    puntuacion: 8.8,
    descripcion: "Cyberpunk distópico en Neo-Tokyo"
  },
];

function renderizarPeliculas(listaPeliculas: Pelicula[]): void {
  const container = document.getElementById('peliculas-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  listaPeliculas.forEach(pelicula => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    
    col.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${pelicula.titulo}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${pelicula.año}</h6>
          <p class="card-text">${pelicula.descripcion || ''}</p>
          <span class="badge bg-primary">${pelicula.genero}</span>
          <span class="badge bg-warning text-dark">⭐ ${pelicula.puntuacion}/10</span>
        </div>
      </div>
    `;
    
    container.appendChild(col);
  });
}

function filtrarPorGenero(genero: string): void {
  if (genero === '') {
    renderizarPeliculas(peliculas);
  } else {
    const filtradas = peliculas.filter(p => p.genero === genero);
    renderizarPeliculas(filtradas);
  }
}

function buscarPelicula(termino: string): void {
  const resultados = peliculas.filter(p => 
    p.titulo.toLowerCase().includes(termino.toLowerCase())
  );
  renderizarPeliculas(resultados);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  renderizarPeliculas(peliculas);
  
  const filtroGenero = document.getElementById('filtro-genero') as HTMLSelectElement;
  filtroGenero?.addEventListener('change', (e) => {
    const target = e.target as HTMLSelectElement;
    filtrarPorGenero(target.value);
  });
  
  const buscador = document.getElementById('buscador') as HTMLInputElement;
  buscador?.addEventListener('input', (e) => {
    const target = e.target as HTMLInputElement;
    buscarPelicula(target.value);
  });
});