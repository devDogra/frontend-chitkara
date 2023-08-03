function add(x, y) {
    return x + y; 
}

let sum = add(10, 20); 
console.log(sum); 

// Default arguments
function greet(name = null) {
    console.log("Hello, " + name); 
}
greet("Dev"); 
greet(); 

let g = greet; 
g("Dev2"); 


// Anonymous functions 
let printHello = function() {
    console.log("Hello"); 
}

(function() {
    console.log("Hello"); 
})(); 

printHello(); 





