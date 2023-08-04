function add(x, y) {
    return x + y; 
}

let add2 = function(x, y) {
    return x + y; 
}

// Arrow functions
let addArrow = (x, y) => {
    // Multiple line functions X
    // console.log("this is addArrow"); 
    return x + y; 
}


let addArrow2 = (x, y) => x + y; 


console.log(addArrow(10, 15)); 
console.log(addArrow2(10, 15)); 

