const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){ 
        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id
        pokemon.name = pokeDetail.name
        
        const types = pokeDetail.types.map((typeSlot)=> typeSlot.type.name)
        const [type] = types

        pokemon.types = types
        pokemon.type = type
        
        pokemon.photo = pokeDetail.sprites.front_default

        return pokemon
}

pokeApi.getPokemonsDetail = (pokemon)=> {//here, "pokemon" is a json that contain pokemon's informations, including a url with more details;
        return fetch(pokemon.url)
                .then((pokeBody) => pokeBody.json()) 
                .then(convertPokeApiDetailToPokemon) // this function has as parameter a json witch contains pokemons details;
                                                     // we want to transfer those details to our pokemon in form a object of class Pokemon;

        }


pokeApi.getPokemons = (offset = 0 , limit =5) =>{
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

return fetch(url) // the fetch() method returns a promisse, a response of a request;
                  // it takes a url as parameter;
                
        .then((response) => response.json()) // once the promisse is sucessfuly concluded, the then() method is called;
                                             // it's like "if it's done, then do that";
                                             // the then() method also returns a promisse;
                                             // the parameter it takes is the response of fetch() method;
                                             // specificly on this part, the response is been convert to json;
        .then((bodyJson) => bodyJson.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))   // map() has a funct as parameter, wich will be apply to every element in a list;  
                                                                       // at end of all interations, we must have a list of promisses of pokemons objects from Pokemon class;    
        .then((detailRequests) => Promise.all(detailRequests))  
        .then((pokemonsDetails) => pokemonsDetails)        // return a list of pokemons objects
        .catch((error) => console.error(error))
}



