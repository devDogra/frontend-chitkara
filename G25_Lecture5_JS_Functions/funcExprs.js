function add(x, y) {
    return x + y; 
}

let addTwoNumbers = add; 

let sum = addTwoNumbers(1, 2); 
console.log(sum); 

// Anonymous functions
let add2 = function(x, y) {
    return x + y; 
}
let sum2 = add2(100, 200); 
console.log(sum2); 
