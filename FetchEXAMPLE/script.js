// https://api.github.com/users 
// ===> ENDPOINT

// https://api.github.com/events
// ===> ENDPOINT

// endpt ==> url w/ data
// api.github.com 
// ==> multiple endpts
// ==> collection of endpoints

// API ==> collections of endpoints


// fetch(url)
//     .then((response) => {
    //         // Will run after response is obtained
//         const getDataPromise = response.json();
//         return getDataPromise;
//     })
//     .then((data) => {
    //         // Will run after data is obtained
//         console.log(data);
//     })


const url = "https://fweifhwkehfkwjehfkwe.com";

// 'async' allows us to use another keyword inside
// this function (await)
async function printUserData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log("FAILED!!!!!!!");
        console.log(err);        
    }

}
printUserData();






