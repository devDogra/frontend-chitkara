// PROMISES
// promises ====> objects
// 1. run an async task
// 2. when that async task finishes, 
// we can specify what needs to happen
// resolve, reject ======> functions

const getLocn = new Promise((resolve, reject) => {
    // We will run our async task here
    navigator.geolocation.getCurrentPosition((pos) => {
        const acc = pos.coords.accuracy;
        if (acc > 20_000) reject(`Task failed. Acc = ${acc}`);
        else resolve(pos);
    })
});

// If promise resolve()'d ====> .then's callback is run
getLocn
    .then((pos) => {
        console.log("First time");
        console.log(pos);
        return getLocn;
    })
    .then((pos) => {
        console.log("Second time")
        console.log(pos);
    })
    .catch((errMsg) => {
        console.log(errMsg);
    })

// Promises ===> Callback hell avoid 


