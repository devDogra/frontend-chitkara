const input = document.querySelector("input"); 
const btn = document.querySelector(".add"); 
const list = document.querySelector("ul"); 
const editBox = document.querySelector(".edit-box"); 
const editOk = document.querySelector(".edit-ok"); 
const editInput = document.querySelector(".edit-inp")

function addTodo() {
    const todoName = input.value; 

    const newLi = document.createElement("li");
    const newLi_p = document.createElement("p"); 
    const newLi_del = document.createElement("button");
    const newLi_edit = document.createElement("button"); 

    // newLi.textContent = todoName; 
    newLi_p.textContent = todoName; 
    newLi_del.textContent = "Delete"; 
    newLi_edit.textContent = "Edit"; 
    newLi_del.classList.add("del");
    newLi_edit.classList.add("edit"); 

    // newLi_del.onclick = ...

    newLi.appendChild(newLi_p);
    newLi.appendChild(newLi_del);
    newLi.appendChild(newLi_edit); 
    list.appendChild(newLi)
    input.value = ""; 
}


function removeTodo(event) {
    const clicked = event.target; 

    const clickedIsDelBtn = clicked.matches(".del");
    if (clickedIsDelBtn == false) {
        return; 
    } else {
        const li = clicked.parentElement; 
        li.remove(); 
    }
}
function editTodo(event) {
    const clicked = event.target; 
    const clickedIsEditBtn = clicked.matches(".edit");
    if (clickedIsEditBtn == false) {
        return; 
    } else {
        // Show edit box
        editBox.classList.add("show"); 
    }
}

function applyEdit(event) {
    const editValue = editInput.value; 
    console.log(editValue); 
    editBox.classList.remove("show");

}



btn.addEventListener("click", addTodo);
editOk.addEventListener("click", applyEdit); 

list.addEventListener("click", editTodo); 
list.addEventListener("click", removeTodo);

