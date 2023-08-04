// Methods
const animal = {
    species: "Cat",
    age: 7,
    makeSound: function() {
        console.log("Meow"); 
    },
    speak: function() {
        // I am a <species>
        console.log(this); 
        console.log("I am a " + this.species); 
    }
}

animal.speak();
// animal.species
// animal.makeSound(); 