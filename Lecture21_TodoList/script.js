const input = document.querySelector("input"); 
const btn = document.querySelector("button"); 
const list = document.querySelector("ul"); 

function addTodo() {
    const todoName = input.value; 

    const newLi = document.createElement("li");
    newLi.textContent = todoName; 

    list.appendChild(newLi)
    input.value = ""; 
}

btn.addEventListener("click", addTodo);