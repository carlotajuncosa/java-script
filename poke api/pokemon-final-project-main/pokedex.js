/**
 * Requisitos
 * - Obtener lista pokedex y guardar en variable ✅
 * - Obtener el listado de todos los pokemons ✅
 * - Obtener todos los pokemons individuales uno por uno ✅
 * - Para obtener todos los pokemons, me dice el ejercicio que debo iterar uno por uno. ✅
 * - Añadir al DOM los pokemons, dentro del div pokedex.
 */

const pokedex$$ = document.querySelector("#pokedex");
const searchInput$$ = document.querySelector('.search-container input');
const ALL_POKEMONS_INFO = [];

const getAllPokemons = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((error) => console.log("Error obteniendo todos los pokemons", error));

const getOnePokemon = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json();

    const pokemon = {
      name: result.name,
      id: result.id,
      types: result.types.map(element => element.type.name),
      image: result.sprites.front_default,
    }

    return pokemon;
  } catch (error) {
    console.log('Error obteniendo pokemon ' + url, error );
  }
}

const renderTypes = (types, container) => {
  const div$$ = document.createElement("div");
  div$$.classList.add("card-subtitle", "types-container");

  types.forEach(type => {
    const typeContainer$$ = document.createElement('p');
    typeContainer$$.setAttribute('pokemon-type', type);
    typeContainer$$.style.backgroundColor = typeColors[type];
    typeContainer$$.classList.add('type');
    typeContainer$$.textContent = type;
    typeContainer$$.addEventListener('click', () => {
      searchInput$$.setAttribute('value', type);
      search(type);
    });
    div$$.appendChild(typeContainer$$);
  });

  container.appendChild(div$$);
}

const renderPokemons = pokemons => {
  pokedex$$.innerHTML = "";

  if(!pokemons.length) {
    const li$$ = document.createElement("li");

    const p$$ = document.createElement("p");
    p$$.classList.add("card-title");
    p$$.textContent = 'No se encuentran resultados';

    li$$.appendChild(p$$);
    pokedex$$.appendChild(li$$);
  }

  pokemons.forEach(poke => {
    const li$$ = document.createElement("li");
    li$$.classList.add("card");

    const img$$ = document.createElement("img");
    img$$.src = poke.image;
    img$$.alt = poke.name;

    const p$$ = document.createElement("p");
    p$$.classList.add("card-title");
    p$$.textContent = poke.name;

    const divId$$ = document.createElement("div");
    divId$$.classList.add("card-subtitle");
    divId$$.textContent = "ID: " + poke.id;
    
    li$$.appendChild(img$$);
    li$$.appendChild(p$$);
    li$$.appendChild(divId$$);
    
    renderTypes(poke.types, li$$);

    pokedex$$.appendChild(li$$);
  });
}

const search = (value) => {
  const filtered = ALL_POKEMONS_INFO.filter(pokemon => {
    const matchName = pokemon.name.includes(value);
    const matchId = pokemon.id == value;
    const matchType = pokemon.types.includes(value);

    return matchName || matchId || matchType;
  });
  renderPokemons(filtered);
};

const addEventsListeners = () => {
  searchInput$$.addEventListener('input', (event) => {
    search(event.target.value)
  });
};

const arrancar = async () => {
  addEventsListeners();
  const allPokemons = await getAllPokemons();

  for (const pokemon of allPokemons) {
    const pokemonIndividualInfo = await getOnePokemon(pokemon.url);
    ALL_POKEMONS_INFO.push(pokemonIndividualInfo);
  }
  console.log("ALL_POKEMONS_INFO", ALL_POKEMONS_INFO);
  renderPokemons(ALL_POKEMONS_INFO);
}

window.onload = arrancar;