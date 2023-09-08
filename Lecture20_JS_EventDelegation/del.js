// const items = document.querySelectorAll("li");

// for (let i = 0; i < items.length; i++) {
//     items[i].onclick = () => console.log(items[i].textContent);
// }

const ul = document.querySelector("ul"); 

ul.addEventListener("click", (event) => {


    const clickedEl = event.target;

    if(clickedEl.matches("li")) {
        clickedEl.textContent += "*";  
    } else {
        return; 
    }


})

