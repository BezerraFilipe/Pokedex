const pokeApi = {}

pokeApi.getPokemons = (offset = 0 , limit = 10) =>{
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch(url) // read more about Fetch API
        .then((response) => response.json()) 
        .then((bodyJson) => bodyJson.results)
        .then((pokemons) => pokemons.map((pokemon)=> fetch(pokemon.url).then((pokeBody => pokeBody.json())))) 
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        
        .catch((error) => console.error(error))
}

