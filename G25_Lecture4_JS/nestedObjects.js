const person = {
    name: "Dev",
    age: 22, 
    hobbies: ["Boxing", "Gaming"],
    location: {
        country: "India",
        state: "UP",
        city: "Lucknow",
    }
}
// for...in loop 
for (let key in person) {
    console.log(key); 
}


console.log(person.name);
console.log(person.hobbies[1]); 
console.log(person.location.city); 

let nums = [100, 200, 300, 400]; 

// Basic looping
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]); 
}

// for..in on arrays
for (let key in nums) {
    console.log(key); 
}

console.log("--for...of---")
// for..of 
// Does not work on objects
for (let val of nums) {
    console.log(val); 
}
