const ul = document.querySelector("ul"); 


ul.addEventListener("click", (event) => {
    const clicked = event.target;
    if (clicked.matches("li")) {
        clicked.style.backgroundColor = "blue";
    } 
})
