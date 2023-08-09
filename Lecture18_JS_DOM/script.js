const items = document.querySelectorAll(".container > div")

console.log(items); 

// Setting text content
for (let i = 0; i < items.length; i++) {
    let itemNum = i + 1; 
    items[i].textContent = "Item " + itemNum;
}

// Removing elements
const item2 = items[1];
item2.remove();

// Adding new elements
// Creating elements
const newItem = document.createElement("div");
const container = document.querySelector(".container")
newItem.textContent = "Item 4"; 

container.appendChild(newItem);

newItem.classList.add("blue");
// newItem.classList.remove("blue"); 

newItem.classList.toggle("blue");

