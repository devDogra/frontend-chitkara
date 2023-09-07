// // delay => ms (5000ms => 5s)
// const printHi = () => console.log("Hi");

// setTimeout(printHi, 5000);
// console.log("Bye");

// const cb = (currPos) => {
//     console.log(currPos);
// }
// // Async

// navigator.geolocation.getCurrentPosition((currPos) => {
//     console.log(currPos);
// });

/* ------------------- TASK -------------------------- */

// 5s wait ==> 
// current pos print 
// ===> 5s wait ==> Bye print

setTimeout( () => {
    navigator.geolocation.getCurrentPosition((currPos) => {
        console.log(currPos);
        setTimeout( () => {
            console.log("Bye");
        }, 5000)
    })
}, 5000)






