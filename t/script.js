// const p = new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(pos => {
//         const accuracy = pos.accuracy;
//         if (accuracy )
//         resolve(pos);
//     })
// })


// p.then(pos => console.log(pos)).catch(err => console.log(err)); 

// const url = "https://www.google.com/";
// const url = "https://en.wikipedia.org/wiki/Project_Gutenberg"; 
// const url = "https://www.gutenberg.org/cache/epub/71609/pg71609-images.html";
const url = "https://www.gutenberg.org/cache/epub/71609/pg71609.txt";
fetch(url).then(response => {
    console.log(response); 
})