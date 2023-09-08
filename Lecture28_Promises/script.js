// Asynchronous Functions
// TASK RUN IN PARELLEL, when that task
// finishes, run callback

// navigator.geolocation.getCurrentPosition((pos) => {
//     console.log(pos);
// })

const getLocn = new Promise( (resolve, reject) => {
    navigator.geolocation.getCurrentPosition((currPos) => {
        if (currPos != null) {
            resolve(currPos);
        } else {
            reject("POSITION NOT FOUND");
        }
    })
});

getLocn
    .then(currPos => {
        console.log(currPos);   
        return getLocn;
    })
    .then(currPos => {
        console.log(currPos);
    })
