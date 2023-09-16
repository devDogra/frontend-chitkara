// https://fakestoreapi.com/products

const url = "https://fakestoreapi.com/products";

function getProductHTML(product) {
    const html = `
    <div class="product">
        <h3>${product.title}</h3>
        <img width="100px" src="${product.image}">
        <p>Price => ${product.price}</p>
    </div>
    `;
    return html; 
}

const container = document.getElementById("container");

async function fetchAndDisplayProducts() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    
    for (let product of data) {
        const productHTML = getProductHTML(product);
        container.innerHTML += productHTML;
    }
    
}
fetchAndDisplayProducts();
