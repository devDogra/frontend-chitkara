// For loops 
let a = [1,2,3,4]; 

for (let idx = 0; idx < a.length; idx++) {
    console.log(a[idx]); 
}

const person = {
    name: "Dev",
    age: 22, 
    hobbies: ["MMA", "Chess"],
    location: {
        country: "IN",
        city: "Delhi",
    }
}

for (let key in person) {
    console.log(key); 
}