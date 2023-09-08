const ta = document.querySelector("textarea"); 
const btn = document.querySelector("button"); 


const fetchedVal = localStorage.getItem("text"); 
if (fetchedVal) {
    ta.value = fetchedVal; 
}  else {
    ta.value = ""; 
}

btn.addEventListener("click", e => {
    const val = ta.value
    localStorage.setItem("text", val);
})

