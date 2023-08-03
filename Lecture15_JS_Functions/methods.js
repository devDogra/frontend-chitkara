const animal = {
    species: "Cat",
    makeSound: function() { 
        console.log("Meow"); 
    },
    introduce() {
        console.log(this); 
        const intro = "Hi, I am a " + this.species;
        console.log(intro); 
    }
}

animal.makeSound(); 
animal.introduce(); 
