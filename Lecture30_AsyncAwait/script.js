// https://api.github.com/users


function getUsers() {
    fetch(url)
        .then((response) => {
            console.log(response);
            const getData = response.json();
            return getData; 
        })
        .then((data) => {
            console.log(data);
        })
    }
    
    // 'async' keyword => allows us to use
    // another keyword inside our function
    // keyword => await
// const url = "https://api.github.com/users";
const url = "https://kwjefwkjehfkwjehfkwe.com";

async function getUsers2() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log("FETCH FAILED")
        console.log(err);
    }
}

getUsers2();