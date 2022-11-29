import fetch from 'node-fetch';

// Valgte en API fra https://github.com/public-apis/public-apis 
// (Corporate Bullshit/Buzzword Generator API)
const endpoint = 'https://corporatebs-generator.sameerkumar.website/';
const badEndpoint = 'https://blablb/dbkw.bla';

// Henter data fra API
const getEndpoint = async function (endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}


setTimeout(() => {
    console.log('Done');
}, 1000)


async function main() {
    // Opgave 1a - Brug getEndpoint() med .then til at udskrive resultatet i konsollen
    getEndpoint(badEndpoint).then(data => console.log(data))

    // Opgave 1b - Tilføj .catch (sammen med .then) til at fange fejl og udskrive dem i konsollen
    
    // Opgave 1b - Brug getEndpoint() med async/await til at udskrive resultatet i konsollen
    const joke = await getEndpoint(endpoint);
    console.log(joke);

    // Opgave 1c - Tilføj try/catch til at fange fejl og udskrive dem i konsollen

    
    // Opgave 2a - Request 10 ting med et for loop og udskriv dem i konsollen
    for (let i = 0; i < 10; i++) {
        const joke = await getEndpoint(endpoint);
        console.log(joke);
    }




    // Opgave 3a - Request 10 gange parallelt (samtidigt) og udskriv dem i konsollen
    // (Hint: Promise.all: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
    const promises = [];
    for (let i = 0; i < 10; i++) {
        // Vi pusher promises ind i arrayet
        // ...
    }


    // Opgave 3b - Bonus: Brug Promise.race til at udskrive den første response der kommer tilbage
      
}

main()