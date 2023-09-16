// fakestoreapi.com
// https://fakestoreapi.com/products

const url = "https://fakestoreapi.com/products";

function getProductHTML(product) {
    let html = `
    <div class="product">
        <h3 class="title">${product.title}</h3>
        <img width="120px" src="${product.image}">
        <p class="price">Price => ${product.price}</p>
    </div>
    `
    return html; 
}

const container = document.getElementById("container") 

async function fetchAndDisplayProducts() {
    const response = await fetch(url);
    const data = await response.json();
    // data => Array of products
    for (let product of data) {
         const html = getProductHTML(product);
         container.innerHTML += html;
    }
}

fetchAndDisplayProducts();
