const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const limit = 12 //number of pokemons loaded per page
let offset = 0 // the "index" of pokemons list

let displayedPokemons = []

const maxRecords = 151 // max amount of pokemons that can be renderized

function loadPokemons(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {  
        pokemonList.innerHTML += pokemons.map((pokemon) => `
                    <div id= "card-${pokemon.number}">
                        <li class="pokemon ${pokemon.type}">
                            <span class="number">#${pokemon.number}</span>
                            <span class="name">${pokemon.name}</span>
                            <div class="detail">
                                <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                </ol>
                                <img src="${pokemon.photo}" alt="${pokemon.name}">
                            </div>
                        </li>
                    </div>
                    `).join('')
        
        
        pokemons.forEach((pokemon)=>displayedPokemons.push(pokemon))
        
        displayedPokemons.forEach((pokemon) => showPokeInfo(pokemon)) 
            
  
    })
    
    
}

function showPokeInfo(pokemon){
    console.log('entrou')
        const pokeCard = document.getElementById(`card-${pokemon.number}`)
        pokeCard.addEventListener('mouseover', () => {
            if (!document.getElementById(`${pokemon.number}Info`)){//Is the information being displayed?
                pokeCard.innerHTML += `<div id = "${pokemon.number}Info" class="pokeInfo" style="color: white;">${pokemon.name}_Informations_Here</div>`
            }   
        })

        pokeCard.addEventListener('mouseout', () => {
            
            if(document.getElementById(`${pokemon.number}Info`)){
                pokeCard.removeChild(document.getElementById(`${pokemon.number}Info`))
            }
            
        })
    
}


// load the firts pokemons
loadPokemons(offset, limit)


// when clicking the button, more pokemons are added 
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



