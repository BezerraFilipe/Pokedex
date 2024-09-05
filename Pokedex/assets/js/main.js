const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url) // in this case, the fetch method is trying to get a Json content on this URL, wich is a pokeAPI
/*
the fetch method wants a resource from internet using the promise/response idea
once the response has been avaiable, it returns the promise

the response is a type of object that represents a return of a promise

the promise is a type of object that will give you a resource once the response is avaible
*/
    .then((response) => response.json()) // a arrow function is a simpler way to describe one function that won't be used again; the left side of the arrow is the parameter of the funcion, and the right side of the arrow is the return;
    /*once that the promisse has been complete, we have the response;
    but this response is in a diferent format that what we want, so we use .json(), a method that translate the response to a Json format */
    .then((bodyJson) => console.log(bodyJson))
    /*Here, the bodyJson represents the translated response of the fetch(URL) promisse; And then we just print that*/
    .catch((error) => console.error(error))
    /* the catch scope is what will be executed in case some error happends during de request*/
    .finally(function(){
        console.log("fim da requisição")
    })
    /*the finally scope is the part of the code that will be executed regardless the previous cases*/



const x = 10+10
console.log(x)

/*here is just a test to see in the console that even the fetch() has been declared before this operations, this console.log will be printed before, because of the time waiting the reponse;*/