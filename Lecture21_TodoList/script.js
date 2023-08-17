const input = document.querySelector("input"); 
const btn = document.querySelector("button"); 
const list = document.querySelector("ul"); 

function addTodo() {
    const todoName = input.value; 

    const newLi = document.createElement("li");
    const newLi_p = document.createElement("p");
    const newLi_del = document.createElement("button"); 

    newLi_del.classList.add("del-btn");
    newLi_del.textContent = "Delete"; 
    newLi_p.textContent = todoName; 

    newLi.appendChild(newLi_p);
    newLi.appendChild(newLi_del);

    list.appendChild(newLi)
    input.value = ""; 
}

btn.addEventListener("click", addTodo);

function removeTodo(event) {
    // Select the clicked list item 
    const clicked = event.target; 
    console.log(clicked); 

}

list.addEventListener("click", removeTodo);