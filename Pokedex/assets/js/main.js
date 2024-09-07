function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot)=> `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToHtml(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">

                    <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                    alt="${pokemon.name}">
            
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {  
    pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
})
