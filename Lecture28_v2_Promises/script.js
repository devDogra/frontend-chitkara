// url/endpoint => https://api.github.com/users

const url = "https://api.github.com/users";

// Promise
fetch(url).then((response) => {
    const dataPromise = response.json();
    return dataPromise; 
}).then((data) => {
    console.log(data);
})