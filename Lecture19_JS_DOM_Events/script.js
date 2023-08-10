/* ----------------------------- CLick events  ----------------------------- */
const clickMe = document.querySelector(".click-me");

clickMe.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.x); 
});

/* ----------------------------- Keyboard events ---------------------------- */


const myInput = document.querySelector(".my-input"); 
// myInput.value
myInput.addEventListener("keydown", (e) => {
    // Print whole value
    // console.log(myInput.value);

    // e.target is myInput
    console.log(e.target.value);

    console.log(e.target);
    console.log(e.key);
})
