const input = document.querySelector("input"); 
const btn = document.querySelector(".add"); 
const list = document.querySelector("ul"); 

function addTodo() {
    const todoName = input.value; 

    const newLi = document.createElement("li");
    const newLi_p = document.createElement("p"); 
    const newLi_del = document.createElement("button");

    // newLi.textContent = todoName; 
    newLi_p.textContent = todoName; 
    newLi_del.textContent = "Delete"; 
    newLi_del.classList.add("del");

    // newLi_del.onclick = ...

    newLi.appendChild(newLi_p);
    newLi.appendChild(newLi_del);
    list.appendChild(newLi)
    input.value = ""; 
}

btn.addEventListener("click", addTodo);

function removeTodo(event) {
    const clicked = event.target; 

    const clickedIsDelBtn = clicked.matches(".del");
    if (clickedIsDelBtn == false) {
        return; 
    } else {
        console.log(clicked); 
        const li = clicked.parentElement; 

        li.remove(); 

    }
}

list.addEventListener("click", removeTodo);

