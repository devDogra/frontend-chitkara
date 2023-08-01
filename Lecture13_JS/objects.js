const character = {
    name: "Tom",
    age: 10, 
    'TV Show': "Tom and Jerry",
}

const character2 = character; 
character2.age++; 

let r = 10; 
let s = r; 
s++; 
console.log(r, s); 

console.log(character); 
console.log(character2); 


// console.log(character.name); 
// console.log(character.age); 
// console.log(character['TV Show']);

// character.name = "Jerry";
