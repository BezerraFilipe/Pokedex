const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const limit = 12
let offset = 0

const maxRecords = 151


function convertPokemonToHtml(pokemon){
    return `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">

                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
            
                </div>
            </li>`
}

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {  
        pokemonList.innerHTML += pokemons.map(convertPokemonToHtml).join('')
    })
}

loadPokemons(offset, limit)

loadMoreButton.addEventListener('click', ()=>{

    offset += limit

    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords){
        const newLimit =  maxRecords - offset
        loadPokemons(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)

    }else{
        loadPokemons(offset, limit)
    }
    
})