import fetch from 'node-fetch';

// Valgte en API fra https://github.com/public-apis/public-apis 
// (Corporate Bullshit/Buzzword Generator API)
const endpoint = 'https://corporatebs-generator.sameerkumar.website/';
const badEndpoint = 'https://blablb/dbkw.bla';

// Henter data fra API kovertere det til JSON og retunerer det
const getEndpoint = async function (endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}



// Promises cheat sheet: https://devhints.io/promise

async function main() {
    // Opgave 1a - Hent 'endpoint' med 'getEndpoint()' og .then til at udskrive resultatet i konsollen
    // ...

    // Opgave 1b - Hent 'badEndpoint' med 'getEndpoint()' og .catch (sammen med .then) til at fange fejl og udskrive dem i konsollen
    


    // Opgave 2a - Brug getEndpoint() med async/await til at udskrive resultatet i konsollen

    // Opgave 2b - Tilføj try/catch til at fange fejl og udskrive dem i konsollen

    

    // Opgave 3a - Request 10 ting med et for loop og udskriv dem i konsollen

    // Opgave 3b - Request 10 gange parallelt (samtidigt) og udskriv dem i konsollen
    // (Hint: Promise.all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
    // const promises = [];
    // for (let i = 0; i < 10; i++) {
    //     // Vi pusher promises ind i arrayet
    //     // ...
    // }

    // Opgave 3c - Bonus: Brug Promise.race til at udskrive den første response der kommer tilbage
}

main()