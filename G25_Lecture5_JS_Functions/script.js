function add(x, y) {
    return x + y; 
}

let sum = add(10, 20); 

console.log(sum); 

// Default parameters
function greet(name = "person") {
    // "Hello " + name; 
    console.log(`Hello ${name}`);
}

greet("Dev"); 
greet(); 