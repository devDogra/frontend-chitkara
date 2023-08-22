let names = ["Dev", "Aryan", "Dogra"];

// let firstName = names[0];
// let lastName = names[1];

let [ firstName, , lastName ] = names; 
console.log(firstName, lastName); 


[firstName, lastName] = [ "Bobby", "Fischer"];

console.log(firstName, lastName);


let a = 10; 
let b = 20; 

// Swap a, b
[b, a] = [a, b]; 

/* -------------------------------------------------------------------------- */
const car = {
    topspeed: 200,
    color: "red",
    price: 10000000
}

let { topspeed : speed, price } = car; 
console.log(topspeed, price); 