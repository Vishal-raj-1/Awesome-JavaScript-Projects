const poke_container = document.getElementById('poke_container');

const poke_number = 150;

const fetchPokemons = async () => {
    for (let i = 1; i <= poke_number; i++) {
        await getPokemon(i)
    }
}

// get Pokemon by id 

const getPokemon = async id => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon)
}

fetchPokemons();

// create card 

function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('li')
    pokemonEl.classList.add('pokemon');
    const poke_types = pokemon.types.map(el => el.type.name);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const type = pokemon.types.map(el => el.type.name)
    const pokeInnerHTML = `
    <li class="card">
    <div class="image-container" >
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" class="pokemon-img"> 
    </div>
    <div class="info">
    <span class="number">${pokemon.id}</span>
    <h3 class="name">${name}</h3>
    <h5 class="type" > Type:<span> ${type}</span>
    </div>
    </li>

    `
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl)
}
