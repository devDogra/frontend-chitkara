// {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}

// id, 
// title,
// price, 
// description, 
// category, 
// image, 
// rating
function getItemHTML(name, img, price) {

    let itemHTML = `
        <div class="item">
            <h3>${name}</h3>
            <img src=${img} alt="">
            <p class="price"> Price => ${price}</p>
        </div>
    `
    return itemHTML;
    
}
const container = document.getElementById("container");

const url = "https://fakestoreapi.com/products";

async function displayItems() {
    const response = await fetch(url); 
    const data = await response.json();
    for (let item of data) {
        const name = item.title;
        const price = item.price;
        const img = item.image; 

        const html = getItemHTML(name, img, price);

        container.innerHTML += html; 
    }

}

displayItems();