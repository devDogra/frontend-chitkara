let a = 10; 
let b = 20; 

const bigger = Math.max(a, b, 4, 200, 9);
console.log(bigger); 

const ages = [ 10, 5, 18, 22, 19 ]

// Spread operator
const oldest = Math.max(...ages);
console.log(oldest); 

const x = [...ages]; 

const x = ages; 

console.log(x); 
