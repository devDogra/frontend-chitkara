const car = {
    topspeed: 200,
    color: "red",
    price: 1_00_00_000
}

let { topspeed, ...details} = car; 
console.log(details); 


// function printCar({ topspeed, color}) {
//     // const { topspeed, color } = car; 
//     console.log(topspeed, color, price); 
// }
// printCar(car)