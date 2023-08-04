function sayHello() {
    console.log("Hello"); 
}
let warning = function() {
    console.log("WARNING"); 
}
function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(); 
    }
}
let x = 5; 
// repeat(x, warning); 
repeat(5, function() {
    console.log("WARNING"); 
})
