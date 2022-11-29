

// callback function is called after 1 second
setTimeout(function callback() {
    console.log('Hello after 1 sec');
}, 1000);


// setTimeoutAsync is a function that returns a promise
// const setTimeoutAsync = function (timeout) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(resolve, timeout);
//     });
// }

// async function main() {
//     // wait 1 second
//     await setTimeoutAsync(1000);
//     console.log('Hello after 1 sec');
// }

// main()
