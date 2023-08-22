const words = [ "Mike", "Tyson", "was", "a", "boxer"]; 

// Rest operator
const [firstWord, secondWord, ...remaining] = words; 

console.log(remaining); 
