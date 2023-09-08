const car1 = {
    speed: 200,
    color: "red",
    price: 1000000
}
const car2 = {
    speed: 100,
    color: "green",
    price: 983293
}

function createCar(speed, color, price) {
    const car = {
        speed: speed, 
        color: color,
        price: price
    }
    return car; 
}

const car3 = createCar(150, "grey", 10000);
const car4 = createCar(90, "blue", 2000);
/* -------------------------------------------------------------------------- */
// CONSTRUCTORS
function Car(speed, color, price) { 
    // 1. new object is created, and this
    // is set to that object
    // this = { } 

    // 2. function body is run
    this.speed = speed; 
    this.color = color; 
    this.price = price; 

    // 3. the newly created object is returned
    // return this;
}

const car5 = new Car(300, "black", 100000);
const car6 = new Car(200, "pink", 90000);


console.log(car5); 



